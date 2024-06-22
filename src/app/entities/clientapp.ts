import { Projects } from "../interfaces/Projects";

export const jdbc: Projects = {
    title: "",
    video : "",
    thumbnailURL: "assets/projects-img/jdbc/imagem1.png",
    image: {
        imageUrl: [
            "assets/projects-img/library/image1.png",
            "assets/projects-img/library/image2.png",
        ],
        alt: "Carrosel de imagens da aplicação client"
    },
    shortExplication: "Um sistema para uma corretora de automóveis",
    tech: ["JAVA","POO","JDBC","MYSQL","MAVEN"],
    github: "https://github.com/Cleyton-ORocha/",
    deploy: "https://cliente.cleytonorocha.com.br/home",
    longText: "Este sistema, desenvolvido em Java, organiza uma corretora de automóveis utilizando JDBC com MySQL para persistência de dados em tempo real, oferecendo funcionalidades como cadastro de veículos, gerenciamento de clientes, e geração de relatórios. A interface gráfica é baseada no terminal, exibindo tabelas formatadas com delimitadores de caracteres especiais. Para utilizá-lo, é necessário ter JDK (8 para cima), MySQL, Maven e biblioteca JDBC configurados, além de ter que implementar o script SQL do projeto no banco da máquin. O sistema é executado via terminal.",
    id: "jdbc"
}