import { Injectable, } from "@angular/core";
import { CatRepository } from 'src/app/core/repositories/cat.repository';
import { CatWebRepositoryMapper } from './cat-web-respository-mapper';
import { Observable } from 'rxjs';
import { map, flatMap } from 'rxjs/operators';
import { CatModel } from 'src/app/core/domain/cat.model';
import {CatWebEntity} from './cat-web-entity';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export default class CatWebRepository extends CatRepository{
    mapper = new CatWebRepositoryMapper();
    
    baseUrl: string = 'http://5b8d40db7366ab0014a29bfa.mockapi.io/api/v1/elephants'
    constructor(
        private http: HttpClient
    ){
        super();
    }

    getCatById(id: number): Observable<CatModel>{
        return this.http
            .get<CatWebEntity>(`${this.baseUrl}/${id}`)
            .pipe(map(this.mapper.mapFrom));
    }

    getAllCats(): Observable<CatModel>{
        return this.http
            .get<CatWebEntity[]>(`${this.baseUrl}`)
            .pipe(flatMap(item => item))
            .pipe(map(this.mapper.mapFrom));
    }
}