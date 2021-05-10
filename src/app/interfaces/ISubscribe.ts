import { HttpErrorResponse, HttpResponse } from "@angular/common/http";

export interface IHttpErrorResponse extends HttpErrorResponse {
    error: Array<string>;
}

export interface IHttpLoginResponse {
    token: string;
}