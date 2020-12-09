import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
// http: any;
Url = 'http://localhost:5000/weatherforecast';

constructor(private http: HttpClient) {  }
getForecasts(): any {
  return this.http.get(this.Url);
}

updateForecasts(forecast: any, id: any): any {
  return this.http.post(this.Url + '/' + id, forecast);
}
createForecast(forecast: any): any{
  return this.http.post(this.Url , forecast);
}
deleteForecast(id: any){
 return this.http.delete(this.Url + '/' + id);
}
}
