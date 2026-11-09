import { Component } from '@angular/core';
import { MainExperienceWrapperComponent } from '../experience-wrap/main-experience-wrapper.component';
import { ExperienceDetailsComponent } from '../experience-details/experience-details.component';
import { ContentExperienceComponent } from '../experience-content/content-experience.component';

@Component({
  selector: 'app-profesional',
  imports: [ MainExperienceWrapperComponent, ExperienceDetailsComponent, ContentExperienceComponent],
  templateUrl: './profesional.html',
  styleUrl: './profesional.scss',
})
export class Profesional {
  geVernovaItems = [
    { img: 'assets/images/experience/ge-vernova.png', text: 'Developed and maintained user interfaces for web applications using Angular, HTML, CSS, and TypeScript.' },
    { img: 'assets/images/experience/ge-vernova.png', text: 'Developed and maintained user interfaces for web applications using Angular, HTML, CSS, and TypeScript.' }
  ];
  ibmItems = [
    { img: 'assets/images/experience/ge-vernova.png', text: 'Developed and maintained user interfaces for web applications using Angular, HTML, CSS, and TypeScript.' },
    { img: 'assets/images/experience/ge-vernova.png', text: 'Developed and maintained user interfaces for web applications using Angular, HTML, CSS, and TypeScript.' }
  ];
  bmwItems = [
    { img: 'assets/images/experience/ge-vernova.png', text: 'Developed and maintained user interfaces for web applications using Angular, HTML, CSS, and TypeScript.' },
    { img: 'assets/images/experience/ge-vernova.png', text: 'Developed and maintained user interfaces for web applications using Angular, HTML, CSS, and TypeScript.' }
  ]

}
