import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { MyTestComponent } from './my-test/my-test.component';
import { MyTestService } from "./my-test/my-test.service";

@NgModule({
  declarations: [
    AppComponent,
    MyTestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: "", redirectTo: "test", pathMatch: "full" },
      { path: "test", component: MyTestComponent }
    ])
  ],
  providers: [MyTestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
