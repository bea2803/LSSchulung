import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppComponent } from '../app.component';
import { HelloWorldBean, WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  message = 'some welcome message'
  welcomeMessageFromService: String = ''; 
  name = ''
  constructor(private route:ActivatedRoute, private service: WelcomeDataService) { }

  ngOnInit(): void {
    // console.log(this.route.snapshot.params['name'])
    this.name = this.route.snapshot.params['name']
  }

  getWelcomeMessage(){
    //console.log(this.service.executeHelloWorldBeanService());
    this.service.executeHelloWorldBeanService().subscribe(response => this.handleSuccessfulRespone(response), error => this.handleErrorResponse(error));
  
    console.log('last line of getWelcomeMessage');
    //console.log("get welcome message");
  }

  getWelcomeMessageWithParameter(){
    //console.log(this.service.executeHelloWorldBeanService());
    this.service.executeHelloWorldBeanServiceWithPath(this.name).subscribe(response => this.handleSuccessfulRespone(response), error => this.handleErrorResponse(error));
  
    console.log('last line of getWelcomeMessage');
    //console.log("get welcome message");
  }


  handleSuccessfulRespone(response: HelloWorldBean) {
    this.welcomeMessageFromService = response.message;
    
  }

  handleErrorResponse(error: { error: { message: String; }; }) {
    this.welcomeMessageFromService = error.error.message;
  }
}
