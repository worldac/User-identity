import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { WeatherService } from 'src/app/_services/weather.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit{
@Input() ForecastHandler: any;
@Output() ShowModeU = new EventEmitter();
model: any = [];

  constructor(private weatherService: WeatherService) { }
  ngOnInit(): any {
  }
CancelShowModeU(): any {
this.ShowModeU.emit(false);
}
getData(): any{
  this.ForecastHandler;
  console.log(this.ForecastHandler);
}

UpdateForecast(): any {
  console.log('Forcast Updated successfully');
  const model = {
    id: this.ForecastHandler.id,
    temperatureC: Number(this.ForecastHandler.temperatureC),
    summary: this.ForecastHandler.summary
  };
  console.log(model);
  this.weatherService.updateForecasts(model, this.ForecastHandler.id).subscribe(() => {
    console.log('Forcast Updated successfully');
    alert('Forcast Updated successfully');
    }, (error: any) => {
      console.log(error);
    });
  }
}

