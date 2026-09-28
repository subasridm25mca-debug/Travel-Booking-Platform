import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-visa',
  imports: [],
  templateUrl: './visa.html',
  styleUrl: './visa.css'
})
export class Visa {

  constructor(private router: Router) {}

  applyNow(destination: string, visaType: string) {

    this.router.navigate(['/booking'], {
      queryParams: {
        destination: destination,
        service: 'Visa',
        package: visaType
      }
    });

  }

}