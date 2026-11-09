import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-experience-details',
  standalone: true,
  templateUrl: './experience-details.component.html',
  styleUrl: './experience-details.component.scss',
})
export class ExperienceDetailsComponent {
  @Input() role = '';
  @Input() skills: string[] = [];
  @Input() outcome = '';
  @Input() link = '';
}
