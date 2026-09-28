import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tours',
  imports: [],
  templateUrl: './tours.html',
  styleUrl: './tours.css'
})
export class Tours {

  constructor(private router: Router) {}

  bookNow(destination: string, tourName: string) {

    this.router.navigate(['/booking'], {
      queryParams: {
        destination: destination,
        service: 'Tour',
        package: tourName
      }
    });

  }

}