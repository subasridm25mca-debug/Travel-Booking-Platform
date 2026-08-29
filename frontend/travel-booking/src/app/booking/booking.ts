import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-booking',
  imports: [FormsModule],
  templateUrl: './booking.html',
  styleUrl: './booking.css'
})
export class Booking implements OnInit {

  booking = {
    fullName: '',
    email: '',
    phone: '',
    destination: 'Goa',
    service: 'Flight',
    travelDate: '',
    travellers: '1 Traveller',
    package: 'Family Package',
    requests: ''
  };

  bookingConfirmed = false;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {

    this.route.queryParams.subscribe(params => {

      if (params['destination']) {
        this.booking.destination = params['destination'];
      }

      if (params['service']) {
        this.booking.service = params['service'];
      }

      if (params['package']) {
        this.booking.package = params['package'];
      }

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