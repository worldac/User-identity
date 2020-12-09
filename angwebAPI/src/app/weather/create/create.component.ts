import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { WeatherService } from 'src/app/_services/weather.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  @Output() createModeHandler = new EventEmitter();
  createForm: FormGroup;
  constructor(private weatherService: WeatherService) { }

  ngOnInit(): any {
    this.createForm = new FormGroup({
      temperatureC: new FormControl(),
      summary: new FormControl()
    });
  }
cancelCreateMode(): any{
this.createModeHandler.emit(false);
  }
  createForecast():any {
    console.log(this.createForm.value);
    this.weatherService.createForecast(this.createForm.value).subscribe((response: any) => {
      console.log(response);
    }, (error: any) => {
      console.log(error);
    });
  }

}
