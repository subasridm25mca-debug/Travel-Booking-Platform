import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.html',
  styleUrl: './hotels.css'
})
export class Hotels {

  constructor(private router: Router) {}

  viewHotel(
    destination: string,
    hotelName: string,
    room: string
  ) {
    this.router.navigate(['/hotel-details'], {
      queryParams: {
        hotel: hotelName
      }
    });
  }

  bookNow(
    destination: string,
    hotelName: string,
    room: string
  ) {
    this.router.navigate(['/booking'], {
      queryParams: {
        destination: destination,
        service: 'Hotel',
        package: hotelName,
        room: room
      }
    });
  }

}