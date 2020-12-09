// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-weather',
//   templateUrl: './weather.component.html',
//   styleUrls: ['./weather.component.scss']
// })
// export class WeatherComponent implements OnInit {

// //   showT=false;

// //   constructor() { }

// //   ngOnInit(): any {
// //   }
// // toggleShow(){
// //   this.showT = !this.showT;
// // }
// showMode = false;
//   constructor() { }

// inShow() {
//   this.showMode = true;
// }

// cancelShow(event: boolean) {
// this.showMode = event;
// }
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weatherforecast',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent {
  createMode = false;
  showMode = false;
  constructor() { }

inShow() {
  this.showMode = true;
}
inCreateMode(){
  this.createMode = true;
}
cancelAddMode(event: boolean): any {
this.createMode = event;
}
cancelCreateMode(event: boolean): any{
this.createMode = event;
}

}
