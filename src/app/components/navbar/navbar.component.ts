import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

interface Link {
  link: string;
  name: string;
}
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  links: Link[] = [
    {
      link: '#about',
      name: 'header.nav.about',
    },
    {
      link: '#projects',
      name: 'header.nav.projects',
    },
    {
      link: '#contact',
      name: 'header.nav.contact',
    },
  ];
}
