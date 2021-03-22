import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngx-sign-gen-demo';
  img: string = '';

  username: string = '';
  config: any = {
    width: 500,
    height: 150,
    paddingX: 50,
    paddingY: 80,
    font:  ["50px", "'Homemade Apple'"],
    color: "black",
    customFont: { 
      name: "'Homemade Apple'", 
      url: "http://fonts.googleapis.com/css?family=Homemade+Apple"  
    }
  };

  getImage(data) {
    this.img = data;
  }
}
