import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cabs',
  imports: [],
  templateUrl: './cabs.html',
  styleUrl: './cabs.css'
})
export class Cabs {

  constructor(private router: Router) {}

  bookNow(cabType: string) {

    this.router.navigate(['/booking'], {
      queryParams: {
        destination: 'Goa',
        service: 'Cab',
        package: cabType
      }
    });

  }

}