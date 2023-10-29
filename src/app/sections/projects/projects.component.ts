import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

interface Portfolio {
  img: string;
  alt: string;
  title: string;
  desc: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  portfolio: Portfolio[] = [
    {
      img: 'https://unbounce.com/photos/Calm-crop.png',
      alt: 'projects.first.alt',
      title: 'projects.first.title',
      desc: 'projects.first.desc',
    },
    {
      img: 'https://unbounce.com/photos/Zola-crop.png',
      alt: 'projects.second.alt',
      title: 'projects.second.title',
      desc: 'projects.second.desc',
    },
  ];
}
