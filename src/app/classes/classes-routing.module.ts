import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassesHomeComponent } from './classes-home/classes-home.component';

const routes: Routes = [
  { path: '', component: ClassesHomeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClassesRoutingModule { }
