import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatCardListComponent } from './presentation/cat-card-list/cat-card-list.component';


const routes: Routes = [
  {
    path: '',
    component: CatCardListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
