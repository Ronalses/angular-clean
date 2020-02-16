import { Mapper } from 'src/app/core/base/mapper';
import { CatModel } from 'src/app/core/domain/cat.model';
import { CatMockEntity } from './cat-mock-entity';

export class CatMockRespositoryMapper implements Mapper<CatMockEntity, CatModel>{
    mapFrom(param: CatMockEntity): CatModel{
        return {
            name: param.name,
            family: param.family
        };
    }

    mapTo(param: CatModel): CatMockEntity{
        return {
            id: 0,
            name: param.name,
            family: param.family
        };
    }
}