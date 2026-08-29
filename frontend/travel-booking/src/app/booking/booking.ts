import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-booking',
  imports: [FormsModule],
  templateUrl: './booking.html',
  styleUrl: './booking.css'
})
export class Booking {

  booking = {
    // Guest Details
    fullName: '',
    email: '',
    phone: '',

    // Common Details
    destination: '',
    service: '',
    travelDate: '',
    travellers: '1 Traveller',
    package: '',

    // Hotel Details
    room: '',
    checkOutDate: '',
    rooms: '1 Room',

    // Special Requests
    requests: ''
  };

  bookingConfirmed = false;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute
  ) {

    this.route.queryParams.subscribe(params => {

      this.booking.destination =
        params['destination'] || '';

      this.booking.service =
        params['service'] || '';

      this.booking.package =
        params['package'] || '';

      this.booking.room =
        params['room'] || '';

    });

  }


  confirmBooking() {

    this.http.post(
      'http://localhost:5000/api/bookings',
      this.booking
    ).subscribe({

      next: (response) => {

        console.log('Booking saved:', response);

        this.bookingConfirmed = true;

      },

      error: (error) => {

        console.error('Booking failed:', error);

        alert('Booking failed. Please try again.');

      }

    });

  }

}