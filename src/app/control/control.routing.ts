import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ControlComponent } from './pagina/control.component';



export const CONTROL_COMPONENTS = [
  ControlComponent
];

const routes: Routes = [
  {
    path: 'control',
    component: ControlComponent
     
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class ControlRouting { }