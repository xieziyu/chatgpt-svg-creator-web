import { Injectable } from '@angular/core';

const STORAGE_KEY = 'chatgpt-svg-config';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}

  async get(items: Record<string, any>): Promise<Record<string, any>> {
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
    let result = { ...items };
    Object.keys(items).forEach(key => {
      if (key in stored) {
        result[key] = stored[key];
      }
    });
    return result;
  }

  async set(items: Record<string, any>) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...items }));
    return;
  }
}
