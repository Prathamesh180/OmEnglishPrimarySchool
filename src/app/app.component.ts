import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

import { AboutSectionComponent } from './about-section/about-section.component';
import { AdmissionsComponent } from './admissions/admissions.component';
import { ContactSectionComponent } from './contact-section/contact-section.component';
import { FeaturesComponent } from './features/features.component';
import { FooterComponent } from './footer/footer.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    AboutSectionComponent,
    AdmissionsComponent,
    FeaturesComponent,
    GalleryComponent,
    ContactSectionComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'SchoolWebsite';

  constructor(private router: Router) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        const tree = this.router.parseUrl(this.router.url);
        if (tree.fragment) {
          const element = document.getElementById(tree.fragment);
          if (element) {
            setTimeout(() => {
              element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 100); // slight delay ensures element is rendered
          }
        }
      });
  }
}
