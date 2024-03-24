import { Component, ElementRef, ViewChild } from '@angular/core';
import {LngLat, Map, Marker} from 'mapbox-gl';

@Component({
  templateUrl: './marker-page.component.html',
  styleUrl: './marker-page.component.css'
})
export class MarkerPageComponent {
  @ViewChild("map") divMap? : ElementRef;//forma 2

  public map?:Map;
  public currentLngLat : LngLat = new LngLat(-71.25228369856006, -29.949362799151437)

  ngAfterViewInit(): void {

    if( !this.divMap) throw Error('El elemento html no se encontro')

    this.map = new Map({
      container: this.divMap.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.currentLngLat, // starting position [lng, lat]
      zoom: 13, // starting zoom
    });

    //forma 1
    // const markerHtml = document.createElement('div');
    // markerHtml.innerHTML = 'Patricio Ahumada'

    // const marker =  new Marker({
    //   color:'#34CF58',
    //   element: markerHtml
    // })
    //   .setLngLat(this.currentLngLat)
    //   .addTo(this.map);
  }

  createMarker(){

    if(!this.map) return;

    const color = '#xxxxxx'.replace(/x/g, y=>(Math.random()*16|0).toString(16));
    const lngLat = this.map.getCenter();
    this.addMarker(lngLat , color);
  }

  addMarker(lngLat :LngLat , color:string){
    if(!this.map) return;

    const marker = new Marker({
      color:color,
      draggable:true
    }).setLngLat(lngLat)
    .addTo( this.map );

  }
}
