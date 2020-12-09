import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { WeatherService } from 'src/app/_services/weather.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss']
})
export class ShowComponent implements OnInit {
// @Output() cancelShow = new EventEmitter();
@Output() ShowMode = new EventEmitter();
// updateMode = false;
// showUpdate = false;
ShowUpdate = false;
forecasts: any;
forecastRec: any;
  constructor(private weatherService: WeatherService) { }
  ngOnInit(): any {
    this.getForecast();
  }

  getForecast(): any{
    this.weatherService.getForecasts().subscribe((response: any) => {
      console.log(response);
    this.forecasts = response;
    console.log(this.forecasts);
    }, (error: any) => {
      console.log(error);
    });
  }

  updateT(forecast: any): any{
    this.ShowUpdate = true;
    this.forecastRec = forecast;
  }

  CancelShowMode(): any {
    this.ShowMode.emit(false);
  }
  CancelShowU(event: boolean): any {
    this.ShowUpdate = event;
  }
  deleteT(item: any){
    this.weatherService.deleteForecast(item).subscribe(()=>{
      console.log('Forecast Deleted Sucessfully');
      this.ngOnInit();
    }, (error: any) =>{
      console.log(error);
    });
  }
}
