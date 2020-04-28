import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyComponent } from './lazy.component';
import { LazyRoutingModule } from './lazy.routing';
import { ChildLazyComponent } from './child-lazy/child-lazy.component';
import { OutletLazyComponent } from './outlet-lazy/outlet-lazy.component';

@NgModule({
  imports: [
    CommonModule,
    LazyRoutingModule
  ],
  declarations: [
    LazyComponent,
    ChildLazyComponent,
    OutletLazyComponent,
    LazyComponent
  ]
})
export class LazyModule { }
