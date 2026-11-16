import { Component, HostListener, OnDestroy, signal } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnDestroy {
  title = signal('portfolio');
  isScrolling = signal(false);
  private scrollEndTimer?: ReturnType<typeof setTimeout>;

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.isScrolling.set(true);
    clearTimeout(this.scrollEndTimer);
    this.scrollEndTimer = setTimeout(() => {
      this.isScrolling.set(false);
    }, 250);
  }

  ngOnDestroy(): void {
    clearTimeout(this.scrollEndTimer);
  }
}
