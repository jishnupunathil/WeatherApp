import { Component } from '@angular/core';
import { WeatherService } from './weather.service';
declare var google:any

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  lat=10.7867
  lng=76.65
  map=google.maps.map

  wheatherDetails:any

  constructor (private weatherSer:WeatherService){}
  title = 'wheather_app';

  selectedDistricts:any
  keralaDistricts = [
    {
      name: 'Kasaragod',
      lat: '12.49',
      lng: '74.98'
    },
    {
      name: 'Wayanadu',
      lat: '11.6854',
      lng: '76.1320'
    },
    {
      name: 'Kannur',
      lat: '11.8745',
      lng: '75.3704'
    },
    {
      name: 'Malappuram',
      lat: '11.0510',
      lng: '76.0711'
    },
    {
      name: 'Kozhikode',
      lat: '11.25',
      lng: '75.78'
    },
    {
      name: 'Palakkad',
      lat: '10.7867',
      lng: '76.65'
    },
    {
      name: 'Ernakulam',
      lat: '9.98',
      lng: '76.29'
    },
    {
      name: 'Idukki',
      lat: '9.91',
      lng: '77.10'
    },
    {
      name: 'Kottayam',
      lat: '10.7867',
      lng: '76.65'
    },
    {
      name: 'Alappuzha',
      lat: '9.49',
      lng: '76.38'
    },
    {
      name: 'Pathanamthitta',
      lat: '9.26',
      lng: '76.78'
    },

    {
      name: 'Kollam',
      lat: '8.89',
      lng: '76.61'
    },
    {
      name: 'Thiruvananthapuram',
      lat: '8.52',
      lng: '76.93'
    },
    {
      name: 'Thrissur',
      lat: '10.52',
      lng: '76.21'
    }
  ]

options:any
overlays:any


setMap(event:any){ 
this.map=event.map
}

  SelectDistrict(){
    console.log('clicked',this.selectedDistricts);
    this.lat=this.selectedDistricts.lat
    this.lng-this.selectedDistricts.lng

    this.weatherSer.getWeatherDetails(this.lat,this.lng).subscribe((res)=>{
      console.log(res);
      this.wheatherDetails=res
      this.map.setCenter({
          lat:Number(this.lat),
          lng:Number(this.lng)
        })
      
    })
  }

    ngOnInit(){
      this.selectedDistricts={

        name: 'Palakkad',
      lat: '10.7867',
      lng: '76.65'


      }
      this.options={
        center:{lat:Number(this.lat),lng:Number(this.lng)},
        zoom:12
      }
      
      this.weatherSer.getWeatherDetails(this.lat,this.lng).subscribe((res)=>{
        console.log(res);
        this.wheatherDetails=res
      
      })
    }

}
