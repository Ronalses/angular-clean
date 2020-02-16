import { CatRepository } from "src/app/core/repositories/cat.repository";
import { CatMockRespositoryMapper } from "./cat-mock-repository-mapper";
import { Observable, observable, from } from 'rxjs';
import { CatModel } from 'src/app/core/domain/cat.model';
import { cats } from './data-mock';
import { CatMockEntity } from './cat-mock-entity';
import { flatMap, filter, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export default class CatMockRepository extends CatRepository {
    mapper = new CatMockRespositoryMapper();
    constructor() {
        super();
    }

    getCatById(id: number): Observable<CatModel> {
        return from(cats)
            .pipe(filter((cat: CatMockEntity) => cat.id === id))
            .pipe(map(this.mapper.mapFrom));
    }

    getAllCats(): Observable<CatModel>{
       return from(cats)
        .pipe(map(this.mapper.mapFrom));
    }
}