import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { OutletComponent } from './outlet/outlet.component';
import { ChildComponent } from './child/child.component';

@NgModule({
   declarations: [
      AppComponent,
      EmptyRouteComponent,
      OutletComponent,
      ChildComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
