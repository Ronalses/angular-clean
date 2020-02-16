import { Component, OnInit } from '@angular/core';
import { GetAllCatsUseCase } from 'src/app/core/usecases/usescases';
import { CatModel } from 'src/app/core/domain/cat.model';

@Component({
  selector: 'app-cat-card-list',
  templateUrl: './cat-card-list.component.html',
  styleUrls: ['./cat-card-list.component.scss']
})
export class CatCardListComponent implements OnInit {

  cats: Array<CatModel>;
  
  constructor(
    private getAllCats: GetAllCatsUseCase
  ) {
    this.cats = [];
  }

  ngOnInit() {
    this.loadData();
  }

  loadData(){
    this.getAllCats.execute().subscribe((value: CatModel) => {
      console.log(value);
      this.cats.push(value);
    });
  }

}
