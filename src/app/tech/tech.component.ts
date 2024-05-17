import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { tech } from './tech';
import { ActiveTech } from '../interfaces/ActiveTech';
import { CommonModule, NgClass } from '@angular/common'; 

Chart.register(...registerables)

@Component({
  selector: 'app-tech',
  standalone: true,
  imports: [NgClass,BaseChartDirective],
  templateUrl: './tech.component.html',
  styleUrl: './tech.component.css'
})
export class TechComponent implements OnInit {

  protected techData: ActiveTech = tech;

  constructor() {
    this.techData = tech;
  }

  ngOnInit(): void {
    this.renderChart(this.techData);
  }

  renderChart(techData: ActiveTech) {
    this.techData = techData;
    
    new Chart("chart", {
      type: 'pie',
      data: {
        labels: Object.keys(this.techData)
          .filter(textInvalid => !this.techData.textInvalid.includes(textInvalid))
          .map(text => text.charAt(0).toUpperCase() + text.slice(1)),
        datasets: [{
          label: 'Qtd: ',
          data: [
            Object.values(this.techData.backend.values).length,
            Object.values(this.techData.frontend.values).length,
            Object.values(this.techData.devops.values).length,
            Object.values(this.techData.banco.values).length
          ],
          borderWidth: 1
        }]
      },

      options: {
        plugins: {
          legend: {
            align: 'center',
            position: 'bottom',
            labels: {
              font: {
                size: 15
              },
              color: '#ffffff'
            }
          }
        },
        responsive: true,
        onClick(event, elements, chart) {
          const indiceElemento = elements[0].index;
          techData.techControlActive(indiceElemento);
        },
      },
    });
  }
  
}


