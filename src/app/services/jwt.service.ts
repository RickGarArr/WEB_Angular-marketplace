import { Injectable } from '@angular/core';
import { LocalStorgeService } from './local_storage.service';
import jwt from 'jwt-decode';
import { IToken } from '../interfaces/IToken';


@Injectable({
    providedIn: 'root'
})
export class JWTService {

    public userDecoded: IToken;

    constructor(private localStorageService: LocalStorgeService ) {}

    saveTokenToLocalStorage(token: string): Promise<void>{
        return new Promise<void>(resolve => {
            this.localStorageService.saveString('x-token', token);
            this.userDecoded = this.decodeToken(token);
            this.localStorageService.saveObject('user', this.userDecoded);
            resolve();
        });
    }

    private decodeToken(token: string): IToken {
        return jwt(token, {header: false}) as IToken;
    }
}