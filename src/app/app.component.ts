import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterOutlet } from '@angular/router';

import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { flags } from './config/flags';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [RouterOutlet, TranslateModule, HeaderComponent, FooterComponent],
})
export class AppComponent {
  defaultLanguage: string = 'es';
  translation =
    localStorage.getItem('language') ||
    this.translate.getBrowserLang() ||
    this.defaultLanguage;

  constructor(public translate: TranslateService) {
    this.translate.addLangs(flags);
    this.translate.use(this.translation);
  }
}
