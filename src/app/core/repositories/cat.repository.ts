import { Observable } from 'rxjs';
import { CatModel } from '../domain/cat.model';

export abstract class CatRepository{
    abstract getCatById(id: number): Observable<CatModel>;
    abstract getAllCats(): Observable<CatModel>;
    
}