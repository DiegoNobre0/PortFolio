import { Component, Input } from '@angular/core';
import { Card } from '../../model/card';
import { TruncatePipe } from '../trucate-pipe/trucate.pipe.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() data!: Card;
  read: boolean = false;

  metodReader(){
    this.read = !this.read
  }

  getImagem() {
    return `url('${this.data.image}')`;
  }
}
