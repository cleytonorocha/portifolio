import { Component } from '@angular/core';
import { Projects } from '../interfaces/Projects';
import { stuffingTavern } from '../entities/stuffing-tavern';
import { librarySystem } from '../entities/library-system';

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
    stuffingTavern,
    stuffingTavern,
    stuffingTavern,
    stuffingTavern

  ];

  constructor(){
  }

}
