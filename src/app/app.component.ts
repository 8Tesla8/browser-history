import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public param: string;
  public state:string;
  public currentUrl:string;


  constructor(private router: Router){
    this.currentUrl = window.location.href;

    router.events.subscribe((event) => {

      if(event instanceof NavigationEnd) { 
        this.currentUrl = window.location.href;
      }
  });
  }

  public addUrlInBrowserHistory():void{
    history.pushState({}, this.param, `?param=${this.param}`);
    this.currentUrl = window.location.href;
  }

  public goBack():void{
    history.back();    
  }



}
