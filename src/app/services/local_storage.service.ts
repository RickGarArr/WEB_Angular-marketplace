import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class LocalStorgeService {
    saveString(key: string, data: string) {
        localStorage.setItem(key, data);
    }

    saveObject(key: string, object: Object) {
        localStorage.setItem(key, JSON.stringify(object));
    }

    getString(key: string, callback: Function) {
        const data = localStorage.getItem(key);
        if(!data) callback(new Error('El item no existe'));
        callback(null, data);
    }

    getObject(key: string, callback: Function) {
        const data = localStorage.getItem(key);
        if(!data) callback(new Error('El item no existe'));
        callback(null, JSON.parse(data));
    }

    clearData() {
        localStorage.clear();
    }
}