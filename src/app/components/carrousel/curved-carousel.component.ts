
import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-curved-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './curved-carousel.component.html',
  styleUrl: './curved-carousel.component.scss'
})
export class CurvedCarouselComponent {
  @ViewChild('carousel') carousel!: ElementRef<HTMLDivElement>;

  images = [
    { src: 'assets/images/photo1.jpg', alt: 'Coastal landscape' },
    { src: 'assets/images/photo2.jpg', alt: 'Architecture' },
    { src: 'assets/images/photo3.jpg', alt: 'Mountain landscape' },
    { src: 'assets/images/photo4.jpg', alt: 'Flowers' },
    { src: 'assets/images/photo5.jpg', alt: 'City landscape' },
    { src: 'assets/images/photo6.jpg', alt: 'Ocean view' },
    { src: 'assets/images/photo7.jpg', alt: 'Travel destination' }
  ];

  // Creates the arch: low → high → low

    getOffset(index: number): number {
    const center = (this.images.length - 1) / 2;
    const distance = Math.abs(index - center);

    return Math.pow(distance, 2) * 4;
    }

    getRotation(index: number): number {
    const center = (this.images.length - 1) / 2;
    return (index - center) * 3;
    }


  scroll(direction: number): void {
    this.carousel.nativeElement.scrollBy({
      left: direction * 320,
      behavior: 'smooth'
    });
  }


    ngAfterViewInit(): void {
        const element = this.carousel.nativeElement;
        const cards = element.querySelectorAll('.carousel-item');

        if (!cards.length) return;

        const middleCard = cards[Math.floor(cards.length / 2)] as HTMLElement;

        element.scrollLeft =
            middleCard.offsetLeft +
            middleCard.offsetWidth / 2 -
            element.clientWidth / 2;
    }

}
