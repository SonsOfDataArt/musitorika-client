import { Component, OnInit } from '@angular/core';
import { MyTestService } from './my-test.service';
// import {error} from "selenium-webdriver";

@Component({
  selector: 'app-my-test',
  templateUrl: './my-test.component.html',
  styleUrls: ['./my-test.component.css']
})
export class MyTestComponent implements OnInit {
  result: string;
  errorMessage: string;
  constructor(private mytest: MyTestService) { }

  ngOnInit() {
  }

  getString() {
    this.result = this.mytest.getTestString();
  }

  get2String() {
    this.mytest.getTest2String().then(
      result => this.result = result,
      error => this.errorMessage = error
    );
  }
}
