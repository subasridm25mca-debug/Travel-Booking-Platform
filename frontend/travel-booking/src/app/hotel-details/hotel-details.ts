import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hotel-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hotel-details.html',
  styleUrl: './hotel-details.css'
})
export class HotelDetails {

  hotel: any = null;

  // Image slider
  galleryImages: string[] = [];
  selectedIndex: number = 0;
  selectedImage: string = '';

  // Fullscreen image viewer
  lightboxOpen: boolean = false;


  hotels: any = {

    'Luxury Beach Resort': {
      name: 'Luxury Beach Resort',
      destination: 'Goa',
      location: 'Goa • Beach View',
      rating: '4.8',
      badge: 'Popular',

      description:
        'Beautiful beachside resort with a relaxing atmosphere, stunning sea views and premium accommodation. Perfect for families, couples and groups looking for a peaceful beach holiday.',

      ambience:
        'Relaxed tropical ambience with palm trees, ocean views, peaceful surroundings and easy access to the beach.',

      gallery: [
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1400&q=85',
        'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1400&q=85',
        'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1400&q=85',
        'https://images.unsplash.com/photo-1602002418082-a4443e081dd1?auto=format&fit=crop&w=1400&q=85',
        'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1400&q=85',
        'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1400&q=85'
      ],

      features: [
        '🏖️ Beach View',
        '🏊 Swimming Pool',
        '📶 Free Wi-Fi',
        '🍳 Breakfast Included',
        '🚗 Free Parking',
        '🛎️ Room Service'
      ],

      rooms: [
        {
          name: '2 BHK Sea View Room',
          details: '2 Bedrooms • 2 Bathrooms • 4 Guests',
          price: '₹3,999/night',
          image:
            'https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=800&q=80'
        },
        {
          name: 'Deluxe Beach Room',
          details: '1 Bedroom • 1 Bathroom • 2 Guests',
          price: '₹2,999/night',
          image:
            'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80'
        }
      ]
    },


    'Mountain View Hotel': {
      name: 'Mountain View Hotel',
      destination: 'Manali',
      location: 'Manali • Mountain View',
      rating: '4.7',
      badge: 'Best Seller',

      description:
        'A peaceful mountain hotel surrounded by beautiful Himalayan views. A perfect stay for families, couples and adventure travellers.',

      ambience:
        'Warm mountain ambience with wooden interiors, fireplace, scenic views and a peaceful environment.',

      gallery: [
        'https://images.unsplash.com/photo-1517825738774-7de9363ef735?auto=format&fit=crop&w=1400&q=85',
        'https://images.unsplash.com/photo-1601918774946-25832a4be0d6?auto=format&fit=crop&w=1400&q=85',
        'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1400&q=85',
        'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1400&q=85',
        'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1400&q=85',
        'https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1400&q=85'
      ],

      features: [
        '🏔️ Mountain View',
        '🔥 Fireplace',
        '📶 Free Wi-Fi',
        '🍽️ Restaurant',
        '🚗 Parking',
        '☕ Room Service'
      ],

      rooms: [
        {
          name: '3 BHK Mountain Suite',
          details: '3 Bedrooms • 3 Bathrooms • 6 Guests',
          price: '₹4,499/night',
          image:
            'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=800&q=80'
        },
        {
          name: 'Deluxe Mountain Room',
          details: '1 Bedroom • 1 Bathroom • 2 Guests',
          price: '₹2,999/night',
          image:
            'https://images.unsplash.com/photo-1601918774946-25832a4be0d6?auto=format&fit=crop&w=800&q=80'
        }
      ]
    },


    'Grand Dubai Hotel': {
      name: 'Grand Dubai Hotel',
      destination: 'Dubai',
      location: 'Dubai • City View',
      rating: '4.9',
      badge: 'Luxury',

      description:
        'Premium city hotel offering luxurious rooms, modern interiors and world-class facilities in the heart of Dubai.',

      ambience:
        'Modern luxury ambience with elegant interiors, city views, premium facilities and sophisticated surroundings.',

      gallery: [
        'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1400&q=85',
        'https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1400&q=85',
        'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1400&q=85',
        'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1400&q=85',
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1400&q=85',
        'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1400&q=85'
      ],

      features: [
        '🌆 City View',
        '🏊 Infinity Pool',
        '💪 Fitness Centre',
        '🍽️ Restaurant',
        '📶 Free Wi-Fi',
        '🛎️ 24/7 Service'
      ],

      rooms: [
        {
          name: 'Premium Suite',
          details: '1 Bedroom • 1 Bathroom • 2 Guests',
          price: '₹8,999/night',
          image:
            'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80'
        },
        {
          name: 'Luxury Family Suite',
          details: '2 Bedrooms • 2 Bathrooms • 4 Guests',
          price: '₹12,999/night',
          image:
            'https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=800&q=80'
        }
      ]
    },


    'Maldives Island Resort': {
      name: 'Maldives Island Resort',
      destination: 'Maldives',
      location: 'Maldives • Ocean View',
      rating: '4.9',
      badge: 'Beach Escape',

      description:
        'Private island resort surrounded by crystal-clear waters, beautiful beaches and peaceful tropical surroundings.',

      ambience:
        'Peaceful tropical ambience with private beaches, ocean views, palm trees and relaxing island surroundings.',

      gallery: [
        'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=85',
        'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1400&q=85',
        'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=1400&q=85',
        'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1400&q=85',
        'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1400&q=85',
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1400&q=85'
      ],

      features: [
        '🌊 Ocean View',
        '🏝️ Private Island',
        '🏊 Swimming Pool',
        '🍳 Breakfast Included',
        '🤿 Water Activities',
        '💆 Spa'
      ],

      rooms: [
        {
          name: 'Ocean Villa',
          details: '1 Bedroom • 1 Bathroom • 2 Guests',
          price: '₹12,999/night',
          image:
            'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=800&q=80'
        },
        {
          name: 'Private Beach Villa',
          details: '2 Bedrooms • 2 Bathrooms • 4 Guests',
          price: '₹19,999/night',
          image:
            'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=800&q=80'
        }
      ]
    }

  };


  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {

    this.route.queryParams.subscribe(params => {

      const hotelName = params['hotel'];

      this.hotel = this.hotels[hotelName];

      if (!this.hotel) {
        this.router.navigate(['/hotels']);
        return;
      }

      // Set gallery
      this.galleryImages = this.hotel.gallery;

      // First image
      this.selectedIndex = 0;
      this.selectedImage = this.galleryImages[0];

    });

  }


  // ================= IMAGE SLIDER =================

  selectImage(index: number) {

    this.selectedIndex = index;
    this.selectedImage = this.galleryImages[index];

  }


  nextImage() {

    this.selectedIndex =
      (this.selectedIndex + 1) % this.galleryImages.length;

    this.selectedImage =
      this.galleryImages[this.selectedIndex];

  }


  previousImage() {

    this.selectedIndex =
      (this.selectedIndex - 1 + this.galleryImages.length)
      % this.galleryImages.length;

    this.selectedImage =
      this.galleryImages[this.selectedIndex];

  }


  // ================= LIGHTBOX =================

  openLightbox() {

    this.lightboxOpen = true;

  }


  closeLightbox() {

    this.lightboxOpen = false;

  }


  // ================= BOOKING =================

  bookRoom(room: any) {

    this.router.navigate(['/booking'], {
      queryParams: {
        destination: this.hotel.destination,
        service: 'Hotel',
        package: this.hotel.name,
        room: room.name
      }
    });

  }


  // ================= BACK =================

  goBack() {

    this.router.navigate(['/hotels']);

  }

}