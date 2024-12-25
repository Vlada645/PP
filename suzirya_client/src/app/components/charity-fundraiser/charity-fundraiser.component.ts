import { Component } from '@angular/core';

@Component({
  selector: 'app-charity-fundraiser',
  templateUrl: './charity-fundraiser.component.html',
  styleUrl: './charity-fundraiser.component.scss'
})
export class CharityFundraiserComponent {
  charitable_gathering = [
    {img: 'assets/projects_img_candles.jpg', title: 'Заголовок', sum_at_this_moment: 45098, main_sum: 100000},
    {img: 'assets/projects_img_car.jpg', title: 'Заголовок', sum_at_this_moment: 45098, main_sum: 100000},
    {img: 'assets/projects_img_fuel.jpg', title: 'Заголовок', sum_at_this_moment: 45098, main_sum: 100000},
  ]
}
