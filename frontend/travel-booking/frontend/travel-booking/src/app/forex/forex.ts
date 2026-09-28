import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forex',
  imports: [],
  templateUrl: './forex.html',
  styleUrl: './forex.css'
})
export class Forex {

  constructor(private router: Router) {}

  getCard(cardType: string) {

    this.router.navigate(['/booking'], {
      queryParams: {
        destination: 'International',
        service: 'Forex Card',
        package: cardType
      }
    });

  }

}