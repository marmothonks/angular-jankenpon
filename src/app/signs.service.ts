import { Injectable } from '@angular/core';

import { Sign } from './models/sign';

@Injectable({
  providedIn: 'root'
})
export class SignsService {

  private signs : Sign[];

  constructor() {
    this.signs = [
      { id: 1, name: 'rock' },
      { id: 2, name: 'paper' },
      { id: 3, name: 'scissors' },
    ];
  }

  getSigns(): Sign[] {
    return this.signs;
  }

  /**
   * Gets a random sign for the opponent
   */
  opponentSelect() : Sign{
    let index = Math.floor(Math.random() * 3);
    return this.signs[index];
  }

}
