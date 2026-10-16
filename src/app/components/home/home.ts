import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { ImageComponent } from '../img/image';
import { EmojiAnimation } from '../../services/emoji-animation';
import { CardComponent } from '../card/card';
import { CurvedCarouselComponent } from '../carrousel/curved-carousel.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrl: './home.scss',
  imports: [ImageComponent, CardComponent, CurvedCarouselComponent]
})
export class Home implements AfterViewInit, OnDestroy  {
  @ViewChild('container', { static: true })
  container!: ElementRef<HTMLElement>;
  
  constructor(private animation: EmojiAnimation) {}

  ngAfterViewInit(): void {
    this.animation.start(this.container.nativeElement);
  }

  ngOnDestroy(): void {
    this.animation.stop();
  }

}
