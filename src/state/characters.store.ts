import Storage from '@mamba/pos/api/storage.js';
import type { Character } from './characters.interface';

class CharactersStore {
  hasCharacter(id: number): boolean {
    const store = Storage.getItem('characters');
    return store ? store.ids.includes(id) : false;
  }

  upsertCharacter(data: Character) {
    let entities = {};
    let ids = [];
    const store = Storage.getItem('characters');

    if (store) {
      entities = store.entities;
      ids = store.ids;
    }

    data.accessed = new Date().toISOString();

    entities[data.id] = data;

    if (!ids.includes(data.id)) {
      ids.push(data.id);
    }

    const updatedStore = {
      entities,
      ids,
    };

    Storage.setItem('characters', updatedStore);
  }
}

let instance;

export default function charactersStore(): CharactersStore {
  if (!instance) {
    instance = new CharactersStore();
  }

  return instance;
}
