import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { LoginComponent } from './login/login.component';
import { Child1Component } from './child1/child1.component';
import { LazyModule } from './lazy/lazy.module';

@NgModule({
   declarations: [
      AppComponent,
      EmptyRouteComponent,
      LoginComponent,
      Child1Component
   ],
   imports: [
      BrowserModule,
      LazyModule,
      AppRoutingModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
