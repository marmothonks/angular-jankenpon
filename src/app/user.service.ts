import { Injectable } from '@angular/core';
import { ScoreService } from './score.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private scoreService: ScoreService) { }

  private currentUser: string;

  private identified: boolean;

  getCurrentUser(): string {
    return this.currentUser;
  }

  setCurrentUser(name: string) {
    this.currentUser = name;
    this.scoreService.newScore(name);
    this.identified = true;
  }

  isLoggedIn(): boolean {
    return this.identified;
  }

  logOut() {
    this.currentUser = null;
    this.identified = false;
  }
}
