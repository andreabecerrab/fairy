
import { Component, Input } from '@angular/core';

@Component({
  selector: 'card-component',
  standalone: true,
  templateUrl: './card.html',
  styleUrl: './card.scss'
})
export class CardComponent {
    @Input() title: string = '';
}
