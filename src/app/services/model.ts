import { Observable } from 'rxjs';


export interface IGeneralService {
    get(url: string,): Observable<any>;

    getAll(url: string,): Observable<any>;

    post(url: string, data: any,): Observable<any>;

    delete(url: string, data?: any,): Observable<any>;

    put(url: string, data: any,): Observable<any>;

}