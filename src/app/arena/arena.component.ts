import { Component, OnInit } from '@angular/core';

import { SignsService } from '../signs.service';

import { Sign } from '../models/sign';
import { ScoreService } from '../score.service';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-arena',
  templateUrl: './arena.component.html',
  styleUrls: ['./arena.component.scss']
})
export class ArenaComponent implements OnInit {

  constructor(
    private router: Router,
    private signsService: SignsService, 
    private scoreService: ScoreService, 
    public userService: UserService) { }

  ngOnInit() {
    this.signs = this.signsService.getSigns();
  }

  /**
 * 
 */
  signs: Sign[];

  /**
   * 
   */
  selectedSign: Sign;

  /**
   * The sign the computer used
   */
  opponentSign: Sign;

  /**
   * result of the draw
   */
  result: number;

  /**
   * show the result
   */
  showResult: boolean;

  /**
   * 
   * @param sign 
   */
  onSelect(sign: Sign): void {
    this.selectedSign = sign;
    this.opponentSign = this.signsService.opponentSelect();

    this.result = this.scoreService.whoWins(this.selectedSign, this.opponentSign);
    this.showResult = true;
  }

  /**
   * 
   */
  playAgain(): void {
    this.showResult = false;
    this.selectedSign = null;
    this.opponentSign = null;
  }

  /**
   * 
   */
  logOut() {
    this.userService.logOut();
    this.router.navigate(['/']);
  }
}
