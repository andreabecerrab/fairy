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
  geVernovaItems = [
    { img: ['assets/images/experience/ge-vernova.png'], text: 'Designing a new exprience and interaction for smart tv ecosystem. \nBased on Amazon Fire TV as a case study. \n\n User Research: Combined quantitative and qualitative methods to understand users behaviors, expectations, and pain points when interacting with Fire TV Stick Interface and Remote Control. \n\n Conducted questionnaires, interviews, usability testing, cognitive walkthroughs, heuristic evaluations, and tree testing. \n Explored individual and shared viewing habits, remote co-watching experiences, interface usability, and information architecture. \n\n\n Findings:\n 1) Content and Interface \n 2) Remote Control Interaction \n 3) Co-watching Interaction'
    },
    { img: ['assets/images/experience/ge-vernova.png', 'assets/images/experience/ge-vernova.png',  'assets/images/experience/ge-vernova.png'], text: '' },
    { img: [''], text: 'Protypes:\n 1) New Identity \n 2) User Interface  \n 3) New Remote Control'},
    { img: ['assets/images/experience/ge-vernova.png', 'assets/images/experience/ge-vernova.png'], text: '' },
    { img: ['assets/images/experience/ge-vernova.png'], text:'', title: 'Results:' }
  ];
  ibmItems = [
    { img: ['assets/images/experience/ge-vernova.png'], text: 'Explore and innovate in the field of smart wearable devices. Redraw and reinterpret everyday objects. Through research and iterative interchange, decontextualize familiar artefacts. \n\n A case study for EssilorLuxxotica - Meta and Rayban Smart Glasses \n\n All rights reserved. Property of EssilorLuxxotica \n\n The process: \n 1) Identify the objective user\n 2) Generate ideas / Innovate \n 3) Validate the technical characteristics\n 4) Design the interaction interface \n Create a prototype' },
    { img: ['assets/images/experience/ge-vernova.png', 'assets/images/experience/ge-vernova.png'], text: '' },   { img: ['assets/images/experience/ge-vernova.png'], text: '' }
  ];
  bmwItems = [
    { img: ['assets/images/experience/ge-vernova.png'], text: 'Explored the integration of Software, Hardware and Interaction Design though a physical house companion. \n\n Designed and developed an interactive smart planter to help users identify the best plants for different spaces in their homes. \n\n Created a pumpkin device integrating 🌡️ temperature, 💧 humidity, and 🌤️ UV light sensors to collect environmental data and provide personalized plant recommendations based on each location conditions. \n\n Developed the hardware and software using Arduino and C++, and designed the user interface and interactive experience using Figma and ProtoPie.' },
    { img: ['assets/images/experience/ge-vernova.png'], text: '' }
  ];
}
