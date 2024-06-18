import { Component } from '@angular/core';

@Component({
  selector: 'app-apresentation',
  standalone: true,
  imports: [],
  templateUrl: './apresentation.component.html',
  styleUrl: './apresentation.component.css'
})
export class ApresentationComponent {

  firstParagraph: string = "Sou um desenvolvedor com amplo conhecimento da linguagem Java, abrangendo todos os conceitos básicos incluindo Orientação a Objetos e Programação Funcional. Tenho experiência em ORM com JDBC e Hibernate. Além disso, tenho familiaridade com Spring Framework, implementando testes unitários e TDD com JUnit e implementando padrões em projetos."
  secoundParagraph: string = "Como desenvolvedor full-stack, valorizo a melhor abordagem arquitetônica para aprimorar o desempenho da aplicação, otimizando não apenas a velocidade de resposta, mas também a escalabilidade e a segurança do sistema. Isso inclui o uso de práticas modernas de desenvolvimento front-end, como frameworks reativos e otimização de carregamento de recursos."

}
