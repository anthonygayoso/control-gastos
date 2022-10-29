import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlRouting, CONTROL_COMPONENTS } from './control.routing';
import { MaterialModule } from '../material/material.module';









@NgModule({
  imports: [
    CommonModule,
    ControlRouting,
    MaterialModule
   
  ],
  declarations: [CONTROL_COMPONENTS]
})
export class ControlModule { }
