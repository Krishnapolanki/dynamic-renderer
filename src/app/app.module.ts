import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DynamicRendererModule } from './features/dynamic-renderer/dynamic-renderer.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    DynamicRendererModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
