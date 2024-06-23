import { Component } from '@angular/core';
import { librarySystem } from '../entities/library-system';
import { stuffingTavern } from '../entities/stuffing-tavern';
import { tddLibrary } from '../entities/tdd-library';
import { Projects } from '../interfaces/Projects';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { jdbc } from '../entities/jdbc';


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
    jdbc,
    // stuffingTavern,
    // stuffingTavern

  ];

  constructor(){
  }

  deploy(text: string) : void | string {
    if(text === "")alert("")
    else return text
  }
}
