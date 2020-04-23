// tslint:disable: max-line-length

import { RouterModule, Routes } from '@angular/router';
import { SampleComponent } from './sample.component';
import { NgModule } from '@angular/core';
import { ChildSample1Component } from './child-sample1/child-sample1.component';

const routes: Routes = [
  { path: '', component: SampleComponent,  children: [
    {
      path: 'childes',
      component: ChildSample1Component,
      outlet : 'sidebar'
    },
  ] 
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SampleRouting { }
