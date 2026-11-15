import { Component, Input } from '@angular/core';

export interface ContentItem {
  text: string;
  img: string[];
  title?: string;
}

export type ContentLayout = 'left' | 'right';

@Component({
  selector: 'app-content-experience',
  standalone: true,
  templateUrl: './content-experience.component.html',
  styleUrl: './content-experience.component.scss',
})
export class ContentExperienceComponent {
  @Input() items: ContentItem[] = [];

  /** 'left'  -> text first, then image
   *  'right' -> image first, then text */
  @Input() layout: ContentLayout = 'left';
}
