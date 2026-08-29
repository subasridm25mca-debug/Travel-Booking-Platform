import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hotels',
  imports: [],
  templateUrl: './hotels.html',
  styleUrl: './hotels.css'
})
export class Hotels {

  constructor(private router: Router) {}

  bookNow(destination: string, packageName: string) {

    this.router.navigate(['/booking'], {
      queryParams: {
        destination: destination,
        service: 'Hotel',
        package: packageName
      }
    });

  }

}