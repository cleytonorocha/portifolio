import { Projects } from "../interfaces/Projects";

export const librarySystem: Projects = {
    title: "Library System",
    video : "",
    thumbnailURL: "assets/projects-img/library/thumbnail.png",
    image: {
        imageUrl: [
            "assets/projects-img/library/image1.png",
            "assets/projects-img/library/image2.png",
        ],
        alt: "Carrosel de imagens da aplicação library system"
    },
    shortExplication: "Biblioteca está aberta!",
    tech: ["JAVA", "SPRING BOOT", "SPRING SECURITY 6", "JWT", "SOLID", "POO", "PROGRAMAÇÃO FUNCIONAL", "DESIGNER PATTERN", "SWAGGER-UI", "PROXY REVERSO", "DOCKER", "NGINX", "OCI-VPS", "SSL", "DTO", "VO"],
    github: "https://github.com/Cleyton-ORocha/library_system",
    deploy: "https://library.cleytonorocha.com.br/swagger-ui/index.html#/",
    longText: "A API de Livraria foi desenvolvida com uma combinação poderosa de tecnologias modernas e melhores práticas. Utilizamos Java e Spring Boot para criar e manter a aplicação, enquanto Spring Security 6 e JWT garantem segurança na autenticação e autorização dos usuários. Princípios SOLID e Programação Orientada a Objetos (POO), juntamente com Programação Funcional, foram seguidos para escrever um código eficiente e confiável.\n Para documentação e usabilidade, integramos o Swagger-UI, permitindo que desenvolvedores explorem e testem os endpoints facilmente. A arquitetura incorpora padrões de design eficazes, e a infraestrutura é aprimorada com Docker para containerização, NGINX como proxy reverso, e OCI-VPS para hospedagem confiável, com SSL assegurando comunicações criptografadas.\nAlém disso, a API utiliza padrões como DTO (Data Transfer Object) e VO (Value Object) para transferir dados de maneira eficiente entre as camadas da aplicação. Essa combinação de tecnologias e práticas garante uma experiência de usuário final robusta e segura, facilitando o cadastro e gerenciamento de livros, bem como outras operações essenciais de uma livraria digital.",
    id: "LibrarySystem"
}