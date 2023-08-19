import { Component, Input } from '@angular/core';
import { Card } from '../../model/card';
import { TrucatePipe} from '../../pipe/trucate-pipe/trucate.pipe';

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

  toLink(){   
    window.open(this.data.linkButton, '_blank');
  }
}
