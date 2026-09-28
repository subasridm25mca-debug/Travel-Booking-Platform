import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.html',
  styleUrl: './hotels.css'
})
export class Hotels {

  constructor(private router: Router) {}

  // =====================================================
  // CURRENT IMAGE INDEX FOR EACH HOTEL
  // =====================================================

  hotelImageIndexes: number[] = [
    0, // Luxury Beach Resort
    0, // Mountain View Hotel
    0, // Grand Dubai Hotel
    0  // Maldives Island Resort
  ];


  // =====================================================
  // HOTEL IMAGES
  // =====================================================

  hotelImages: string[][] = [

    // -----------------------------------------------------
    // 0. LUXURY BEACH RESORT
    // -----------------------------------------------------

    [
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=80',

      'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1000&q=80',

      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1000&q=80',

      'https://images.unsplash.com/photo-1602002418082-a4443e081dd1?auto=format&fit=crop&w=1000&q=80'
    ],


    // -----------------------------------------------------
    // 1. MOUNTAIN VIEW HOTEL
    // -----------------------------------------------------

    [
      'https://images.unsplash.com/photo-1517825738774-7de9363ef735?auto=format&fit=crop&w=1000&q=80',

      'https://images.unsplash.com/photo-1601918774946-25832a4be0d6?auto=format&fit=crop&w=1000&q=80',

      'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1000&q=80',

      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1000&q=80'
    ],


    // -----------------------------------------------------
    // 2. GRAND DUBAI HOTEL
    // -----------------------------------------------------

    [
      'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1000&q=80',

      'https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1000&q=80',

      'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1000&q=80',

      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1000&q=80'
    ],


    // -----------------------------------------------------
    // 3. MALDIVES ISLAND RESORT
    // -----------------------------------------------------

    [
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80',

      'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1000&q=80',

      'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=1000&q=80',

      'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1000&q=80'
    ]

  ];


  // =====================================================
  // IMAGE NAVIGATION
  // =====================================================

  previousHotelImage(index: number): void {

    const images = this.hotelImages[index];

    if (!images || images.length === 0) {
      return;
    }

    if (this.hotelImageIndexes[index] === 0) {

      this.hotelImageIndexes[index] = images.length - 1;

    } else {

      this.hotelImageIndexes[index]--;

    }
  }


  nextHotelImage(index: number): void {

    const images = this.hotelImages[index];

    if (!images || images.length === 0) {
      return;
    }

    if (
      this.hotelImageIndexes[index] ===
      images.length - 1
    ) {

      this.hotelImageIndexes[index] = 0;

    } else {

      this.hotelImageIndexes[index]++;

    }
  }


  // =====================================================
  // VIEW HOTEL DETAILS
  // =====================================================

  viewHotel(
    destination: string,
    hotelName: string,
    room: string
  ): void {

    this.router.navigate(['/hotel-details'], {

      queryParams: {
        hotel: hotelName
      }

    });

  }


  // =====================================================
  // BOOK NOW
  // =====================================================

  bookNow(
    destination: string,
    hotelName: string,
    room: string
  ): void {

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