import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hotels',
  imports: [],
  templateUrl: './hotels.html',
  styleUrl: './hotels.css'
})
export class Hotels {

  constructor(private router: Router) {}

  // View complete hotel details
  viewHotel(
    destination: string,
    hotelName: string,
    room: string
  ) {

    this.router.navigate(['/hotel-details'], {
      queryParams: {
        destination: destination,
        service: 'Hotel',
        package: hotelName,
        room: room
      }
    });

  }

  // Directly go to booking
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