import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataModule } from '../data/data.module';
import { CoreModule } from '../core/core.module';
import { CatCardListComponent } from './cat-card-list/cat-card-list.component'



@NgModule({
  declarations: [CatCardListComponent],
  imports: [
    CommonModule,
    DataModule,
    CoreModule
  ]
})
export class PresentationModule { }
