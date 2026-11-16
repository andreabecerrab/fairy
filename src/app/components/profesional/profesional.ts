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
    { img: ['assets/img/experience/ge.png'],
      text: 'Part of the User Experience Design Team, in charge of delivering Design System and 8+ component libraries to GE Vernova. \n\n Participated in the design, development, and release of  UI libraries used by 10+ teams to build digital products for monitoring and visualizing electrical energy distribution and transmission. \n\n Coordinated cross-functional collaboration between engineering and design teams, improving developer documentation and design consistency. \n\n Key contributions:\n 🌆 Demo and documentation for the Network Viewer library. \n 🎨 Led redesign for the Table library. \n 🐜 Implementing microfrontend architecture to main Shell library. \n  👹 Contributed to 15+ Design System components. \n 🤹🏼 Lead design-token alignment between Figma and code. \n 💻 Design Architecture and implemented different data views across +6 libraries. \n\n These initiatives reduced reported bugs by 15–30% and helped achieve 80% test coverage.' }
  ];
  ibmItems = [
    { img: ['assets/img/experience/ibm2.png'], text: 'Fullstack developer for the IBM Configurators Sales Team. \n\n  Designed and implemented Web Application, Web components, Database Design and RESTful APIs integrating microfrontends and microservices for the configurator migration application. \n\n Key contributions: \n 🍱 Coordinated 16 developers in the development of 20+ shared Angular components, overseeing implementation, documentation, and design consistency through collaboration with UX and Product Owners. \n 💜 Led accessibility initiatives across 30+ components and 2 enterprise applications, planning and executing testing through Playwright, manual evaluations, and screen readers, achieving WCAG/W3C Level 1 accessibility compliance. \n 🕷️ Improved and launched the IBM Systems Configurator web application by enhancing user flows, interactions, and system feedback, while leading its responsive implementation and testing for responviness in tablet and mobile devices.' }
  ];
  bmwItems = [
    { img: ['assets/img/experience/bmw.png'], text: 'Part of the IT team at the BMW Production Plant in San Luis. \n\n Worked on the IT systems and processesfor the plant. \n\n Key contributions: \n  🙂 Translated user and product owner needs into requirments and user stories. \n 🧚🏼‍♀️ Designed data flows, user interface and developed frontend and backend functionalities. \n 🥽 Improved application performance through database optimization and state management implementation. \n 🔍 Conducted product reviews to validate functionality and enhance the user experience.' }
  ]

}
