import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {User} from '../../model/User';
import {News} from '../../model/News';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {
  user: User;
  totalSum = 0;

  constructor(private accountService: AuthService) {
    this.user = this.accountService.userValue[0];
  }

  ngOnInit(): void {
    this.calculateTotalCost();
  }

  calculateTotalCost(): any{
    this.totalSum = 0;
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.user.basket.length; i++){
      this.totalSum += this.user.basket[i].cost;
      console.log(this.user.basket[i].cost);
    }
  }

  delete(pet: News): any {
    // tslint:disable-next-line:prefer-for-of
    this.user.basket = this.user.basket.filter(item => item !== pet);
    this.accountService.update(this.user).subscribe(data => console.log(data), error => console.log(error));
    console.log(this.user);
    this.calculateTotalCost();
  }
}
