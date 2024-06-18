import { Component } from '@angular/core';
import { Projects } from '../interfaces/Projects';
import { stuffingTavern } from '../entities/stuffing-tavern';
import { librarySystem } from '../entities/library-system';
import { tddLibrary } from '../entities/tdd-library';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
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
