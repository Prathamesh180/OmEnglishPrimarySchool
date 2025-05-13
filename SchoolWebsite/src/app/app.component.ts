import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { AboutSectionComponent } from './about-section/about-section.component';
import { AdmissionsComponent } from './admissions/admissions.component';
import { EventsNoticesComponent } from './events-notices/events-notices.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactSectionComponent } from './contact-section/contact-section.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    HeaderComponent,
    AboutSectionComponent,
    AdmissionsComponent,
    EventsNoticesComponent,
    GalleryComponent,
    ContactSectionComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'SchoolWebsite';
}
