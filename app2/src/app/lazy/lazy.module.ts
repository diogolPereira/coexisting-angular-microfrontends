import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyComponent } from './lazy.component';
import { LazyRoutingModule } from './lazy.routing';
import { ChildComponent } from './child/child.component';
import { ChildOutletComponent } from './child-outlet/child-outlet.component';

@NgModule({
  imports: [
    CommonModule,
    LazyRoutingModule
  ],
  declarations: [
    LazyComponent,
    ChildComponent,
    ChildOutletComponent]
})
export class LazyModule { }
