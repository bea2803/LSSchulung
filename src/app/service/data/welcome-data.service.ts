import { HttpClient } from  '@angular/common/http';
import { Injectable } from '@angular/core';

export class HelloWorldBean {
  constructor(public message: String) {

  }
}
@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private http: HttpClient) { }

  executeHelloWorldBeanService() {
    return this.http.get<HelloWorldBean>('http://localhost:8080/hello-world-bean');
    //console.log("execute hello world bean service")
  }

  executeHelloWorldBeanServiceWithPath(name: any){
   return this.http.get<HelloWorldBean>(`http://localhost:8080/hello-world/path-variable/${name}`);
}
}
