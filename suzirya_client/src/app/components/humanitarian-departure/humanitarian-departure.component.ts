import { Component } from '@angular/core';

@Component({
  selector: 'app-humanitarian-departure',
  templateUrl: './humanitarian-departure.component.html',
  styleUrl: './humanitarian-departure.component.scss'
})
export class HumanitarianDepartureComponent {
  departure = [{data:"Виїзд 24.08", city: "Київ", country: "Україна", sum: 10000},
    {data:"Виїзд 30.08", city: "Київ", country: "Україна", sum: 10000},
    {data:"Виїзд 12.09", city: "Київ", country: "Україна", sum: 10000},
    {data:"Виїзд 23.09", city: "Київ", country: "Україна", sum: 10000},
  ]
}
