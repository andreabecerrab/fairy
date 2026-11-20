
import { Component, Input } from '@angular/core';

@Component({
  selector: 'card-component',
  standalone: true,
  templateUrl: './card.html',
  styleUrl: './card.scss'
})
export class CardComponent {
    @Input() title: string = '';
    @Input() size: string = '';
    @Input() src: string = '';

  get isVideo(): boolean {
    return this.src.split(/[?#]/, 1)[0].toLowerCase().endsWith('.mp4');
    }
}
