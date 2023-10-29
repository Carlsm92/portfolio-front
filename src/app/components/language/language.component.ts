import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss'],
})
export class LanguageComponent {
  showLanguages = false;

  constructor(public translate: TranslateService) {}

  switchLang(lang: string) {
    localStorage.setItem('language', lang);
    this.translate.use(lang);
  }

  toggleLanguages() {
    this.showLanguages = !this.showLanguages;
  }
}
