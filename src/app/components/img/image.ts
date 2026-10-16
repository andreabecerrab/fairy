import { Component, Input } from '@angular/core';

@Component({
  selector: 'image-component',
  template: `
    <img 
      [src]="src" 
      [alt]="alt" 
      [style.width]="width" 
      [style.height]="height" 
      class="portfolio-img"
    />
  `,
  styles: [`
    .portfolio-img {
      z-index: 1;
      position: relative;
      max-width: 100%;
      height: auto;
    }
    @media (max-width: 1020px) {
      .portfolio-img {
        width:100%;
        height:100%;
        object-fit:cover;
      }
    }
  `]
})
export class ImageComponent {
  @Input() src: string = '';
  @Input() alt: string = '';
  @Input() width?: string;
  @Input() height?: string;
}
