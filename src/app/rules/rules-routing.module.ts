import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RulesHomeComponent } from './rules-home/rules-home.component';

const routes: Routes = [
  { path: '', component: RulesHomeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RulesRoutingModule { }
