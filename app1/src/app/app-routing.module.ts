import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { APP_BASE_HREF } from '@angular/common';
import { ChildComponent } from './child/child.component';
import { OutletComponent } from './outlet/outlet.component';


const routes: Routes = [
  {
    path:'app1',
    children:[
      {path:'child',component:ChildComponent},
      {path:'outlet',outlet:'example',component:OutletComponent},
    ]
  },
  { path: '**', component: EmptyRouteComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    useHash: true
  })],
  exports: [RouterModule],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
  ],
})
export class AppRoutingModule { }
