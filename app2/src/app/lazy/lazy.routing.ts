import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { LazyComponent } from './lazy.component';
import { ChildComponent } from './child/child.component';
import { ChildOutletComponent } from './child-outlet/child-outlet.component';


const routes: Routes = [

  {
    path: '',
    component: LazyComponent,
    children: [
      {
            path: 'child',
            component: ChildComponent,
      },
      {
            path: 'samplesss',
            component: ChildOutletComponent,
            outlet:'sidebar'
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LazyRoutingModule { }
