import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { IGeneralService } from "./model";

@Injectable({
    providedIn: 'root'
})

export class GeneralService implements IGeneralService {
    constructor(public httpClient: HttpClient) {}

    get(url: string) {
        return this.httpClient
            .get(url)
    }


    getAll(url: string) {
        return this.httpClient
            .get(url)
    }

    post(url: string, data: any) {
        return this.httpClient
            .post(url, data)
    }

    delete(url: string) {
        return this.httpClient
            .delete(url)
    }

    put(url: string, data: any) {
        return this.httpClient
            .put(url, data)
    }
}
