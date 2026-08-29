import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cruise',
  imports: [],
  templateUrl: './cruise.html',
  styleUrl: './cruise.css'
})
export class Cruise {

  constructor(private router: Router) {}

  bookNow(destination: string, cruiseName: string) {

    this.router.navigate(['/booking'], {
      queryParams: {
        destination: destination,
        service: 'Cruise',
        package: cruiseName
      }
    });

  }

}