import { Component } from '@angular/core';
import { ImageComponent } from '../img/image';
import { ContentExperienceComponent } from '../experience-content/content-experience.component';
import { ExperienceDetailsComponent } from '../experience-details/experience-details.component';
import { MainExperienceWrapperComponent } from '../experience-wrap/main-experience-wrapper.component';

@Component({
  selector: 'app-academic',
  imports: [ MainExperienceWrapperComponent, ExperienceDetailsComponent, ContentExperienceComponent],
  templateUrl: './academic.html',
  styleUrl: './academic.scss',
})
export class Academic {
  // ONE
  projectOne = [
    { img: ['assets/img/projects/firetv-intro.png'], text: 'Designing a new exprience and interaction for smart tv ecosystem. \nBased on Amazon Fire TV as a case study. \n\n User Research: Combined quantitative and qualitative methods to understand users behaviors, expectations, and pain points when interacting with Fire TV Stick Interface and Remote Control. \n\n Delivered a re-design of the user interface (Figma and Web App) and remote control (ESP32 + Bluetooth), new information architecture and new integrated feature around co-watching.\n\n'
    },
    // Research
    { img: ['assets/img/projects/one/research-1.png', 'assets/img/projects/one/research-2.png', 'assets/img/projects/one/research-3.png', 'assets/img/projects/one/research-4.png',  'assets/img/projects/one/research-5.png' , 'assets/img/projects/one/research-6.png' , 'assets/img/projects/one/research-7.png' , 'assets/img/projects/one/research-8.png'], text:'', title: 'Research:' },
    // Results
    { img: ['assets/img/projects/one/problem-1.png', 'assets/img/projects/one/problem-2.png',  'assets/img/projects/one/problem-3.png'], text: '', title: ' Findings:\n 1) Content and Interface \n 2) Remote Control Interaction \n 3) Co-watching Interaction' },
    // Design
    { img: ['assets/img/projects/one/design-1.png', 'assets/img/projects/one/design-2.png' ], text:'Design', title: 'Design:' },
    // Development
    { img: ['assets/img/projects/one/dev-1.png', 'assets/img/projects/one/dev-2.png', 'assets/img/projects/one/dev-3.png', 'assets/img/projects/one/dev-4.png', 'assets/img/projects/one/dev-5.png', 'assets/img/projects/one/dev-6.png', 'assets/img/projects/one/dev-7.png', ], text:'', title: 'Development:' },
    // Tests
    { img: ['assets/img/projects/one/test-1.png', 'assets/img/projects/one/test-2.png', 'assets/img/projects/one/test-3.png'], text:'', title: 'Results:' },
  ];
  skillsOne: string[] = ['Figma', 'Wireframing', 'Prototyping', 'User Testing', 'ESP32', 'C++', 'JavaScript', 'Express'];
  // TWO
  skillsTwo = ['User Research', 'Figma', 'Hardware Design', 'Product Design'];
  projectTwo = [
    { img: ['assets/img/projects/glasses-intro.png'], text: 'Explore and innovate in the field of smart wearable devices. Redraw and reinterpret everyday objects. Through research and iterative interchange, decontextualize familiar artefacts. \n\n A case study for EssilorLuxxotica - Meta and Rayban Smart Glasses \n\n All rights reserved. Property of EssilorLuxxotica \n\n The process: \n 1) Identify the objective user\n 2) Generate ideas / Innovate \n 3) Validate the technical characteristics\n 4) Design the interaction interface \n 5) Create a prototype' },
    { img: ['assets/img/projects/two/user.png', 'assets/img/projects/two/prototype.png', 'assets/img/projects/two/components.png', 'assets/img/projects/two/view.png'], text: '' }
  ];
  // THREE
  skillsThree = ['Arduino', 'C++', 'Figma', 'Protyping', 'Interaction Design'];
  projectThree = [
    { img: ['assets/img/projects/pumpking-intro.png'], text: 'Explored the integration of Software, Hardware and Interaction Design though a physical house companion. \n\n Pumpking is an smart and interactive device that helps users identify the best plants for different spaces at home home. \n\n Integrated by 🌡️ temperature, 💧 humidity, and 🌤️ UV light sensors to collect environmental data and provide personalized plant recommendations based on each location conditions. \n\n Developed the hardware and software using Arduino and C++, and mobile application with Figma and ProtoPie.' },
    { img: ['assets/img/projects/tree/intro-0.png', 'assets/img/projects/tree/intro-1.png'], text: 'Intro', title: '' },
    { img: ['assets/img/projects/tree/dev-1.png', 'assets/img/projects/tree/dev-2.png', 'assets/img/projects/tree/dev-3.png', 'assets/img/projects/tree/dev-4.png', 'assets/img/projects/tree/dev-5.png', 'assets/img/projects/tree/dev-6.png', 'assets/img/projects/tree/dev-7.png', 'assets/img/projects/tree/dev-8.png',  'assets/img/projects/tree/dev-9.png',  'assets/img/projects/tree/dev-10.png',  'assets/img/projects/tree/dev-11.png', 'assets/img/projects/tree/dev-12.png'], text: '', title: 'Development' },
    { img: ['assets/img/projects/tree/ui-2.png', 'assets/img/projects/tree/ui-1.png'], text: 'Intro', title: '' },
  ];
}
