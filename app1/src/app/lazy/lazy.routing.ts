import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { LazyComponent } from './lazy.component';
import { ChildLazyComponent } from './child-lazy/child-lazy.component';
import { OutletLazyComponent } from './outlet-lazy/outlet-lazy.component';


const routes: Routes = [
  {
    path:'',
    component:LazyComponent,
    children:[
      {path:'child',component:ChildLazyComponent},
      {path:'outlet',
       outlet:'example',
       component:OutletLazyComponent},
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LazyRoutingModule { }