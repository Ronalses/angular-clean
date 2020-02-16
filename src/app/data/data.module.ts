import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatRepository } from '../core/repositories/cat.repository';
import CatMockRepository from './repository/cat-mock-repository/cat-mock-repository';
import CatWebRepository from './repository/cat-web-repository/cat-web-repository';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    {provide: CatRepository, useClass: CatWebRepository}
  ]
})
export class DataModule { }
