import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import * as mapboxgl from 'mapbox-gl';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
const geojson = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      properties: {
        message: 'Plant 2 trees',
        iconSize: [50, 50],
      },
      geometry: {
        type: 'Point',
        coordinates: [71.45680539120886, 51.15335762642993],
      },
    },
    {
      type: 'Feature',
      properties: {
        message: 'Plant 3 trees',
        iconSize: [50, 50],
      },
      geometry: {
        type: 'Point',
        coordinates: [71.43246328829191, 51.15194085115736],
      },
    },
    {
      type: 'Feature',
      properties: {
        message: 'Plant 4 trees',
        iconSize: [50, 50],
      },
      geometry: {
        type: 'Point',
        coordinates: [71.44898, 51.148725],
      },
    },
  ],
};

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent implements OnInit {
  map!: mapboxgl.Map;
  style = 'mapbox://styles/mapbox/streets-v11';
  lat = 51.169392;
  lng = 71.449074;

  ngOnInit() {
    (mapboxgl as typeof mapboxgl).accessToken = environment.mapbox.accessToken;
    this.map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [this.lng, this.lat],
      zoom: 11,
    });
    //render marker of geojson.features
    geojson.features.forEach((marker: any) => {
      const el = document.createElement('div');
      const width = marker.properties.iconSize[0];
      const height = marker.properties.iconSize[1];
      el.className = 'marker';
      el.style.backgroundImage = `url(https://i.ibb.co/Yjp587r/marker.png)`;
      el.style.width = `${width}px`;
      el.style.height = `${height}px`;
      el.style.backgroundSize = '100%';

      const markerEl = new mapboxgl.Marker(el)
        .setLngLat(marker.geometry.coordinates)
        .addTo(this.map);
      el.onclick = function () {
        console.log(marker.properties.message);
      };
    });
  }
}
//create a image element inside div
// const el = document.createElement('div');
// const width = marker.properties.iconSize[0];
// const height = marker.properties.iconSize[1];
// el.className = 'marker';
