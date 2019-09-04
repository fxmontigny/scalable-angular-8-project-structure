import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { routing, appRoutingProviders } from './pages/app.routing';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, routing],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule {}
