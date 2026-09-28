import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hotels',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hotels.html',
  styleUrl: './hotels.css'
})
export class Hotels {

  selectedDestination: string = '';

  hotelImageIndexes: number[] = [0, 0, 0, 0, 0];

  hotels: any[] = [

    // ==================== GOA ====================

    {
      name: 'Luxury Beach Resort',
      destination: 'Goa',
      location: 'Goa • Beach View',
      rating: '4.8',
      reviews: '120+ Reviews',
      badge: 'Popular',
      price: '₹3,999',
      room: '2 BHK Sea View Room',

      description:
        'A peaceful beachside stay with beautiful sea views, premium rooms and warm hospitality.',

      amenities: [
        '🏖️ Beach View',
        '🏊 Pool',
        '📶 Free Wi-Fi',
        '🍳 Breakfast'
      ],

      images: [
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=85',
        'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1000&q=85',
        'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1000&q=85'
      ]
    },

    {
      name: 'Goa Ocean Retreat',
      destination: 'Goa',
      location: 'Goa • Ocean View',
      rating: '4.7',
      reviews: '86+ Reviews',
      badge: 'Sea View',
      price: '₹4,499',
      room: '3 BHK Ocean View',

      description:
        'A modern coastal retreat designed for families and groups looking for a comfortable beach stay.',

      amenities: [
        '🌊 Ocean View',
        '🏊 Pool',
        '🍽️ Restaurant',
        '📶 Free Wi-Fi'
      ],

      images: [
        'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1000&q=85',
        'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1000&q=85',
        'https://images.unsplash.com/photo-1602002418082-a4443e081dd1?auto=format&fit=crop&w=1000&q=85'
      ]
    },


    // ==================== MANALI ====================

    {
      name: 'Mountain View Hotel',
      destination: 'Manali',
      location: 'Manali • Mountain View',
      rating: '4.7',
      reviews: '98+ Reviews',
      badge: 'Best Seller',
      price: '₹4,499',
      room: '3 BHK Mountain Suite',

      description:
        'A peaceful mountain retreat surrounded by beautiful Himalayan views, warm interiors and comfortable stays.',

      amenities: [
        '🏔️ Mountain View',
        '🔥 Fireplace',
        '📶 Free Wi-Fi',
        '🍽️ Restaurant'
      ],

      images: [
        'https://images.unsplash.com/photo-1517825738774-7de9363ef735?auto=format&fit=crop&w=1000&q=85',
        'https://images.unsplash.com/photo-1601918774946-25832a4be0d6?auto=format&fit=crop&w=1000&q=85',
        'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1000&q=85'
      ]
    },


    // ==================== DUBAI ====================

    {
      name: 'Grand Dubai Hotel',
      destination: 'Dubai',
      location: 'Dubai • City View',
      rating: '4.9',
      reviews: '150+ Reviews',
      badge: 'Luxury',
      price: '₹8,999',
      room: 'Premium Suite',

      description:
        'Modern luxury in the heart of Dubai with elegant interiors, city views and premium hospitality.',

      amenities: [
        '🌆 City View',
        '🏊 Infinity Pool',
        '💪 Fitness',
        '📶 Free Wi-Fi'
      ],

      images: [
        'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1000&q=85',
        'https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1000&q=85',
        'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1000&q=85'
      ]
    },


    // ==================== MALDIVES ====================

    {
      name: 'Maldives Island Resort',
      destination: 'Maldives',
      location: 'Maldives • Ocean View',
      rating: '4.9',
      reviews: '210+ Reviews',
      badge: 'Beach Escape',
      price: '₹12,999',
      room: 'Ocean Villa',

      description:
        'A private island escape surrounded by clear waters, beautiful beaches and peaceful tropical surroundings.',

      amenities: [
        '🌊 Ocean View',
        '🏝️ Private Island',
        '🏊 Pool',
        '💆 Spa'
      ],

      images: [
        'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=85',
        'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=1000&q=85',
        'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1000&q=85'
      ]
    }

  ];


  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {

    this.route.queryParams.subscribe(params => {

      const destination = params['destination'];

      if (destination) {
        this.selectedDestination = destination;
      } else {
        this.selectedDestination = '';
      }

    });

  }


  // ==================== FILTER BY DESTINATION ====================

  get displayedHotels(): any[] {

    if (!this.selectedDestination) {
      return this.hotels;
    }

    return this.hotels.filter(hotel =>
      hotel.destination.toLowerCase() ===
      this.selectedDestination.toLowerCase()
    );

  }


  // ==================== PAGE TITLE ====================

  get pageTitle(): string {

    if (this.selectedDestination) {
      return `Stays in ${this.selectedDestination}`;
    }

    return 'Find Your Perfect Stay';

  }


  // ==================== IMAGE NEXT ====================

  nextHotelImage(index: number): void {

    const hotel = this.displayedHotels[index];

    if (!hotel) {
      return;
    }

    const originalIndex =
      this.hotels.indexOf(hotel);

    this.hotelImageIndexes[originalIndex] =
      (this.hotelImageIndexes[originalIndex] + 1)
      % hotel.images.length;

  }


  // ==================== IMAGE PREVIOUS ====================

  previousHotelImage(index: number): void {

    const hotel = this.displayedHotels[index];

    if (!hotel) {
      return;
    }

    const originalIndex =
      this.hotels.indexOf(hotel);

    this.hotelImageIndexes[originalIndex] =
      (this.hotelImageIndexes[originalIndex] - 1 + hotel.images.length)
      % hotel.images.length;

  }


  // ==================== VIEW HOTEL ====================

  viewHotel(hotel: any): void {

    this.router.navigate(['/hotel-details'], {
      queryParams: {
        hotel: hotel.name
      }
    });

  }


  // ==================== BOOK NOW ====================

  bookNow(hotel: any): void {

    this.router.navigate(['/booking'], {
      queryParams: {
        destination: hotel.destination,
        service: 'Hotel',
        package: hotel.name,
        room: hotel.room
      }
    });

  }

}