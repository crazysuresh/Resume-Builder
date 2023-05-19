import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationStart, NavigationEnd, NavigationError, NavigationCancel, RoutesRecognized } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'food';
  showheader =true;

  constructor(private router: Router){

    router.events.subscribe((val) => {
        if(val instanceof Router){

        }
       }
       )
  }
}
