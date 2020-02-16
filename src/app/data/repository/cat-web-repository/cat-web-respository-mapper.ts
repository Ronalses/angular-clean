import { Mapper } from 'src/app/core/base/mapper';
import { CatWebEntity } from './cat-web-entity';
import { CatModel } from 'src/app/core/domain/cat.model';

export class CatWebRepositoryMapper implements Mapper<CatWebEntity, CatModel>{
    mapFrom(param: CatWebEntity): CatModel{
        return {
            name: param.name,
            family: param.family
        };
    }

    mapTo(param: CatModel): CatWebEntity{
        return {
            id: 0,
            name: param.name,
            family: param.family
        };
    }
}