import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-destinations',
  imports: [],
  templateUrl: './destinations.html',
  styleUrl: './destinations.css'
})
export class Destinations {

  constructor(private router: Router) {}

  bookNow(destination: string) {

    this.router.navigate(['/booking'], {
      queryParams: {
        destination: destination,
        service: 'Flight',
        package: 'Family Package'
      }
    });

  }

}