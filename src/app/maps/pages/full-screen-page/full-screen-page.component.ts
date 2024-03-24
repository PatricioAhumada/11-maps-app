import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import {Map} from 'mapbox-gl';



@Component({
  templateUrl: './full-screen-page.component.html',
  styleUrls: ['./full-screen-page.component.css']
})
export class FullScreenPageComponent implements AfterViewInit{

  //@ViewChild("map") public divMap? : ElementRef; //forma 1
  @ViewChild("map") divMap? : ElementRef;//forma 2


  ngAfterViewInit(): void {

    if( !this.divMap) throw Error('El elemento html no se encontro')

    const map = new Map({
      container: this.divMap.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: [-74.5, 40], // starting position [lng, lat]
      zoom: 9, // starting zoom
    });
  }

}
