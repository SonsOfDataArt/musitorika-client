import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { MyTestComponent } from './my-test/my-test.component';
import { MyTestService } from "./my-test/my-test.service";
import { SearchBoxComponent, 
         SearchResultComponent, 
         YouTubeSearchComponent, 
         youTubeSearchInjectables } from './_components/index';

@NgModule({
  declarations: [
    AppComponent,
    MyTestComponent,
    SearchResultComponent,
    SearchBoxComponent,
    YouTubeSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: "", redirectTo: "test", pathMatch: "full" },
      { path: "test", component: MyTestComponent },
      { path: "youtubesearch", component: YouTubeSearchComponent }
    ])
  ],
  providers: [MyTestService, youTubeSearchInjectables],
  bootstrap: [AppComponent]
})
export class AppModule { }
