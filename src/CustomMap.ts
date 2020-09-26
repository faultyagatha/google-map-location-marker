/** @interface <Mappable> instructions to other classes on how to use add marker 
 * 
*/
export interface Mappable {
  location: {
    lat: number,
    lon: number
  };
  markerContent(): string;
};

/** @class CustomMap: 
 * - hides the functionality of google map 
 * - and exposes only what we need;
 * @method addMarker: 
 * - adds a simple marker to the map;
*/
export class CustomMap {
  private googleMap:google.maps.Map;

  constructor(divId: string) {
    //! not null assertion 
    this.googleMap = new google.maps.Map(document.getElementById(divId)!, { 
      zoom: 2,
      center: {
          lat: 0,
          lng: 0
      }
    }); 
  };

  addMarker(mappable: Mappable) {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lon
      }
    });
    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mappable.markerContent()
      });
      infoWindow.open(this.googleMap, marker);
    });
  };
};