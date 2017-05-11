import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";

import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';

@Injectable()
export class MyTestService {
  url = "http://localhost:8080/hello";
  constructor(private http: Http) { }

  getTestString(): string {
      // console.log(this.http.get(this.url));
    let res = this.http.get(this.url)
      .subscribe(data => { console.log(data) });
    return "";

}

  getTest2String(): Promise<string> {
    let res = this.http.get(this.url)
      .toPromise()
      .then(this.extractString) // преобразовывает ответ в экземпляр Product.
      .catch(this.handleError);
    return res;
  }

  private extractString(response: Response): any {
    console.log(response);
    let res = response.text();
    console.log(res);
    return Observable.throw(res);
  }

  private  extractData(res: Response) {
    let body = res.json();
    return body.data || { };
  }

  private handleError(error: any): any {
    let message = "";

    if (error instanceof Response) {
      let errorData = error.json().error || JSON.stringify(error.json());
      message = `${error.status} - ${error.statusText || ''} ${errorData}`
    } else {
      message = error.message ? error.message : error.toString();
    }

    console.error(message);

    return Observable.throw(message);
  }
}
