import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApresentationComponent } from './apresentation/apresentation.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ProjectsComponent } from './projects/projects.component';
import { TechComponent } from './tech/tech.component';
import { ContactComponent } from './contact/contact.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavBarComponent,
    ApresentationComponent,
    ProjectsComponent,
    TechComponent,
    ContactComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'portifolio';
}
