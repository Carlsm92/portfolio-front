import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  socialLinks = [
    {
      link: 'https://www.facebook.com/Carlossanmil?locale=es_ES',
      img: 'facebook',
    },
    {
      link: 'https://twitter.com/Carlkazuu',
      img: 'x',
    },
    {
      link: 'https://www.instagram.com/carlsanm/',
      img: 'instagram',
    },
    {
      link: 'https://www.linkedin.com/in/carlos-s%C3%A1nchez-mil%C3%A1n-7a3748145/',
      img: 'linkedin',
    },
  ];
}
