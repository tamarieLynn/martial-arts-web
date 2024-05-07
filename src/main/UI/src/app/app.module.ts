import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BackgroundComponent } from './background.component';
import { CommonModule } from '@angular/common'; // Import CommonModule
@NgModule({
  declarations: [
    BackgroundComponent // Declare the BackgroundComponent here
  ],
  imports: [
    CommonModule
  ],
  providers: [],
  exports: [
    BackgroundComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

