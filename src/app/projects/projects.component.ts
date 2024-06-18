import { Component } from '@angular/core';
import { librarySystem } from '../entities/library-system';
import { stuffingTavern } from '../entities/stuffing-tavern';
import { tddLibrary } from '../entities/tdd-library';
import { Projects } from '../interfaces/Projects';
import { CarouselModule } from 'ngx-bootstrap/carousel';


@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    CarouselModule
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent{

  
  public projectData : Projects[] = [
    stuffingTavern,
    librarySystem,
    tddLibrary,
    stuffingTavern,
    stuffingTavern,
    stuffingTavern

  ];

  constructor(){
  }

  deploy(text: string) : void | string {
    if(text === "")alert("")
    else return text
  }
}
