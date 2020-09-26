import faker from 'faker';

import { Mappable } from './CustomMap';

export class User implements Mappable {
  name: string;
  location: {
    lat: number,
    lon: number
  };

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lon: parseFloat(faker.address.longitude())
    };
  };

  markerContent(): string {
    return `
      <div>
        <h1>User: ${this.name}</h1>
        <h3>Location: 
          ${this.location.lat}
          ${this.location.lon}
        </h3>
      </div>  
      `
  };
};