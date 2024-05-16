import { ActiveTech } from "../interfaces/ActiveTech";

export const tech: ActiveTech = {
    backend: {
        id: 0,
        values: {
            java: "Java",
            spring_boot: "Spring Boot",
            spring_security: "Spring Security",
            hibernate: "Hibernate",
            junit5: "JUnit 5",
        },
        isActive: false
    },
    frontend: {
        id: 1,
        values: {
            js: "JavaScript",
            html5: "HTML 5",
            css3: "CSS 3",
            angular: "Angular",
            bootstrap: "Bootstrap",
            ts: "TypeScript"
        },
        isActive: false
    },
    banco: {
        id: 2,
        values: {
            mysql: "MySQL",
            postgresql: "PostgreSQL",
            mongodb: "MongoDB"
        },

        isActive: false
    },
    devops: {
        id: 3,
        values: {
            linux: "Linux",
            docker: "Docker"
        },
        isActive: false
    },
    reset: (): void => {
        tech.backend.isActive = false;
        tech.frontend.isActive = false;
        tech.banco.isActive = false;
        tech.devops.isActive = false;
    },

    techControlActive: (index: number) => {
        if (tech.backend.isActive == true ||
            tech.frontend.isActive == true ||
            tech.banco.isActive == true ||
            tech.devops.isActive == true) {
            tech.reset();
        } else {
            switch (index) {
                case 0: {
                    tech.reset();
                    tech.backend.isActive = true;
                    break;
                }
                case 1: {
                    tech.reset();
                    tech.frontend.isActive = true;
                    break;
                }
                case 2: {
                    tech.reset();
                    tech.banco.isActive = true;
                    break;
                }
                case 3: {
                    tech.reset();
                    tech.devops.isActive = true;
                    break;
                }
                default:
                    tech.reset();
                    break;
            }
        }
    },

    textInvalid: ['reset', 'techControlActive', 'textInvalid'],
};