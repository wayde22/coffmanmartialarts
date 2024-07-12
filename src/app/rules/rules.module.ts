import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RulesRoutingModule } from './rules-routing.module';
import { RulesHomeComponent } from './rules-home/rules-home.component';


@NgModule({
  declarations: [
    RulesHomeComponent
  ],
  imports: [
    CommonModule,
    RulesRoutingModule
  ]
})
export class RulesModule { }
