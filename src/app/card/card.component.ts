import { Component, Input } from '@angular/core';
import { Card } from '../model/card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() data!: Card;
// @Input() image: any; 
// @Input() textHead: any;
// @Input() textFooter: any;
// @Input() linkButton: any;

// image: any = "./assets/profile.png";
// textHead: any ='Furnite store landing page';
// textFooter: any ='Responsive HTML/CSS layout for online teste teste teste teste';
// linkButton: any ='';


getImagem() {
  return `url('${this.data.image}')`;
}
}
