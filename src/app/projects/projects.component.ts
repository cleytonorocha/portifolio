import { Component } from '@angular/core';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { jdbc } from '../entities/jdbc';
import { librarySystem } from '../entities/library-system';
import { ollama } from '../entities/ollama';
import { stuffingTavern } from '../entities/stuffing-tavern';
import { tddLibrary } from '../entities/tdd-library';
import { Projects } from '../interfaces/Projects';


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
    ollama
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
