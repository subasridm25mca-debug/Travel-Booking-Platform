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
    fullName: '',
    email: '',
    phone: '',
    destination: '',
    service: '',
    travelDate: '',
    travellers: '1 Traveller',
    package: '',
    requests: ''
  };

  bookingConfirmed = false;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute
  ) {

    this.route.queryParams.subscribe(params => {

      this.booking.destination =
        params['destination'] || 'Goa';

      this.booking.service =
        params['service'] || 'Flight';

      this.booking.package =
        params['package'] || 'Family Package';

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