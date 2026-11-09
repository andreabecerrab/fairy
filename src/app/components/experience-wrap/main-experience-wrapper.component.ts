import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-main-experience-wrapper',
  standalone: true,
  templateUrl: './main-experience-wrapper.component.html',
  styleUrl: './main-experience-wrapper.component.scss',
})
export class MainExperienceWrapperComponent {
  @Input() title = '';
  @Input() subtitle = '';

  @Input() hasAsideContent = false;
}
