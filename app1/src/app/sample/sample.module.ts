import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SampleComponent } from './sample.component';
import { SampleRouting } from './sample.routing';
import { ChildSample1Component } from './child-sample1/child-sample1.component';

@NgModule({
  imports: [
    CommonModule,
    SampleRouting,
  ],

  declarations: [
    SampleComponent,
    ChildSample1Component]
})
export class SampleModule { }
