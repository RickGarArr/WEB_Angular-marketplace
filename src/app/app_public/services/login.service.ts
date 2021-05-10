import { HttpClient } from '@angular/common/http';
import { Injectable } from  '@angular/core';
import { tap } from 'rxjs/operators';
import { IHttpLoginResponse } from 'src/app/interfaces/ISubscribe';
import { JWTService } from 'src/app/services/jwt.service';
import { environment } from 'src/environments/environment';
import IUsuario from '../interfaces/IUsuario';

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    private base_url: string;
    constructor(private httpClient: HttpClient, private jwtService: JWTService){
        this.base_url = environment.base_url;
    }

    public login(usuario: IUsuario) {
        return this.httpClient.post(`${this.base_url}/admin/login`, usuario).pipe( tap(({token}:IHttpLoginResponse) => {
            this.jwtService.saveTokenToLocalStorage(token);
        }));
    }
}