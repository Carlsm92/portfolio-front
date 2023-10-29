import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import { languages } from './config/languages';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [TranslateModule, HeaderComponent, FooterComponent],
})
export class AppComponent {
  defaultLanguage: string = 'es';
  translation =
    localStorage.getItem('language') ||
    this.translate.getBrowserLang() ||
    this.defaultLanguage;

  constructor(public translate: TranslateService) {
    this.translate.addLangs(languages);
    this.translate.use(this.translation);
  }
}
