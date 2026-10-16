import { Injectable, NgZone } from '@angular/core';

interface Velocity {
  x: number;
  y: number;
}

class Circle {
  x: number;
  y: number;
  range: [number, number];
  v: Velocity;
  element: HTMLSpanElement;

  constructor(
    x: number,
    y: number,
    emoji: string,
    v: Velocity,
    range: [number, number],
    container: HTMLElement
  ) {
    this.x = x;
    this.y = y;
    this.range = range;
    this.v = v;

    this.element = document.createElement('span');
    this.element.style.position = 'absolute';
    this.element.style.fontSize = '26px';
    this.element.style.opacity = '0';
    this.element.style.color = `hsl(${Math.random() * 360 | 0}, 80%, 50%)`;
    this.element.textContent = emoji;
    container.appendChild(this.element);
  }
  update(): void {
    if (this.y > 800) {
      this.y = 0 + Math.random() * 2;
      this.x = this.range[0] + Math.random() * this.range[1];
    }

    this.y += this.v.y;
    this.x += this.v.x;

    this.element.style.opacity = '1';
    this.element.style.transform =
      `translate3d(${this.x}px, ${this.y}px, 0)`;
  }
}

@Injectable({
  providedIn: 'root',
})
export class EmojiAnimation {

  private emojis = [
    '⭐️', '❄️', '🧿', '💖','✨','😛',
    '🤗','👹','👩🏽‍💻','👩🏽‍🎨','🧞','🧚🏽‍♀️','💆🏻‍♀️','🐸','🐵','🦄','🐛','🦋','🦎','🪼','🌞','🌼','🪐','🌈','🫧','🍓',
    '🥭','🥑','🍳','🌮','🍣','🍡','🍬','🥧','🧃','🧋','🥢','🪁','🤿','🧘🏽‍♀️','🫟','🪇','🎢','📱','💎','🔮',
    '🩻','🧸','🛍️','🖼️','🪞','🪩','🎏','💚','❤️‍🔥','♈️','♥️','🇲🇽','🍒',
    '🌽','🍇','🍌','🍒','🍕','🍷','🍭','💖','💩','🐷','🐸','🐳',
    '🎃','🌈','🍦','🔥','🌴'
  ];

  // variables
  private circles: Circle[] = [];
  private animationId: number | null = null;

  constructor(private zone: NgZone) {}

  start(container: HTMLElement): void {
    // for better performance
    this.zone.runOutsideAngular(() => {
      this.createCircles(container);
      this.animate();
    });
  }
  stop(): void {
      if (this.animationId) {
        cancelAnimationFrame(this.animationId);
        this.animationId = null;
      }
  
      this.circles.forEach(c => c.element.remove());
      this.circles = [];
  }

  private createCircles(container: HTMLElement): void {
    for (let i = 0; i < 20; i++) {
      this.addCircle(i * 150, [0, 1200], container);
      this.addCircle(i * 150, [0, -1200], container);
      this.addCircle(i * 150, [-190, -1200], container);
      this.addCircle(i * 150, [210, 1200], container);
      this.addCircle(i * 150, [-390, -1200], container);
      this.addCircle(i * 150, [410, 1200], container);
      this.addCircle(i * 150, [-590, -1200], container);
      this.addCircle(i * 150, [610, 1200], container);
    }
  }
  private addCircle(
    delay: number,
    range: [number, number],
    container: HTMLElement
  ): void {
    setTimeout(() => {
      const circle = new Circle(
        range[0] + Math.random() * range[1],
        0 + Math.random() * 2,
        this.randomEmoji(),
        {
          x: -0.1 + Math.random() * 0.5,
          y: 3 + Math.random()
        },
        range,
        container
      );
      this.circles.push(circle);
    }, delay);
  }
  private randomEmoji(): string {
    return this.emojis[Math.floor(Math.random() * this.emojis.length)];
  }
  private animate = (): void => {
    for (const circle of this.circles) {
      circle.update();
    }
    this.animationId = requestAnimationFrame(this.animate);
  };
}

