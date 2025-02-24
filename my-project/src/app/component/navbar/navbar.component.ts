import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  counter:number = 0;

  incrementCounter(event: any){
    if(this.counter < 10 ){
      this.counter++
    }
  }
  decrementCounter(event: any){
    if(this.counter > 0 ){
      this.counter--
    }
  }
}
