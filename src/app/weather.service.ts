import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http:HttpClient) { }


getWeatherDetails(lat:any,lng:any){
  return this.http.get<any>(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=cced6d2bdfbf8e31f9c82caf2846de59`)
}



}