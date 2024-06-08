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
  secoundParagraph: string = "As a back-end developer, I value the best architectural approach to enhance the application's performance, optimizing not only response speed but also system scalability and security."

}
