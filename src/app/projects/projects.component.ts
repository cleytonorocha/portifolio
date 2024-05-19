import { Component } from '@angular/core';
import { Projects } from '../interfaces/Projects';
import { stuffingTavern } from '../entities/stuffing-tavern';

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
    stuffingTavern,
    stuffingTavern,
    stuffingTavern,
    stuffingTavern,
    stuffingTavern

  ];

  constructor(){
    console.log(stuffingTavern.image.imageUrl)
  }

}
