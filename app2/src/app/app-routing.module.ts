import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { APP_BASE_HREF } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { Child1Component } from './child1/child1.component';


const routes: Routes = [

  {
    path: 'app2',
    component: LoginComponent,
    children: [
      {
            path: 'child',
            component: Child1Component,
            outlet: "sidebar"
      },
      {
            path: 'lazy',
            loadChildren:()=>import('./lazy/lazy.module').then(m => m.LazyModule)
      },
    ]
  },
  { path: '**', component: EmptyRouteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    useHash: true,
  })],
  exports: [RouterModule],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
  ],
})
export class AppRoutingModule { }
