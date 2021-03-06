import { Injectable } from "@angular/core";
import { UseCase } from '../base/use-case';
import { CatRepository } from '../repositories/cat.repository';
import { CatModel } from '../domain/cat.model';

@Injectable({
    providedIn: 'root'
})
export class GetCatByIdUsecase implements UseCase<number, CatModel>{

    constructor(private catRespository: CatRepository) { }

    execute(params: number){
        return this.catRespository.getCatById(params);
    }
}