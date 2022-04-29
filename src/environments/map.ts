export interface IGeometry {
  type: string;
  coordinates: any;
}
export interface IGeoJson {
  type: string;
  properties?: any;
  geometry: IGeometry;
  $key?: string;
}

export class GeoJson implements IGeoJson {
  type = 'feature';
  geometry: IGeometry;
  constructor(coordinates: number[], type: string) {
    this.geometry = {
      type: 'Points',
      coordinates: coordinates,
    };
  }
}
export class FeatureCollection {
  type = 'FeatureCollection';
  constructor(public features: Array<GeoJson>) {}
}
