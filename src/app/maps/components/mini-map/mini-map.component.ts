import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import {LngLat, Map, Marker} from 'mapbox-gl';


interface MarkerAndColor {
  color:string,
  marker: Marker,
}
interface PlainMarker{
  color:string,
  lngLat:number[]
}
@Component({
  selector:'map-mini-map',
  templateUrl: './mini-map.component.html',
  styleUrls: ['./mini-map.component.css']
})
export class MiniMapComponent implements AfterViewInit {

  @Input() lngLat? : [number,number]
  @ViewChild("map") divMap? : ElementRef;

  public markers : MarkerAndColor[]=[]

  public map?:Map;

  ngAfterViewInit(): void {

    if( !this.divMap?.nativeElement ) throw Error("LngLat can't be null");
    if( !this.lngLat ) throw Error("LngLat can't be null");

    //mapa
    const map = new Map({
      container: this.divMap.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: this.lngLat,
      zoom: 15,
      interactive:false
    });

    //marker
    new Marker().setLngLat(this.lngLat)
    .addTo( map );

  }


}
