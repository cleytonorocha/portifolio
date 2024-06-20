import { Projects } from "../interfaces/Projects";

export const tddLibrary: Projects = {
    title: "TDD-Library",
    thumbnailURL: "assets/projects-img/library-tdd-test/TDD.jpg",
    image: {
        imageUrl: [
            "assets/projects-img/library-tdd-test/TDD.jpg",
            "assets/projects-img/library-tdd-test/image.png",
        ],
        alt: "Carrosel de imagens da aplicação tdd system"
    },
    shortExplication: "Uma api de teste para usar o JUnit e as funcionalidades TDD e Testes Unitários",
    tech: ["JAVA", "SPRING BOOT", "SOLID", "POO", "PROGRAMAÇÃO FUNCIONAL", "DTO"],
    github: "https://github.com/Cleyton-ORocha/tdd_library",
    deploy: "",
    longText: "API de exemplo para gerenciamento de biblioteca é uma aplicação simples projetada para demonstrar a implementação de testes unitários usando JUnit e práticas de desenvolvimento orientadas a testes (TDD).  Essa API serve como uma excelente introdução para começar a aplicar testes unitários e TDD, garantindo que cada funcionalidade seja testada e validada de forma eficiente.",
    id: "TDDLibrary"
}