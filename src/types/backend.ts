export interface SocialLink {
    id: number;
    name: string;
    url: string;
    icon: string; // URL da imagem ou identificador
    isActive?: boolean;
}

export interface ProfileData {
    id: number;
    title: string;          // Usado como headline ou nome
    description: string;
    photo_url: string;      // URL da foto de perfil
}

export interface Technology {
    id: number;
    name: string;
    logo: string;           // URL do logo
}

export interface ProjectData {
    id: number;
    title: string;
    description: string;
    image: string;          // URL da imagem do projeto
    link: string;           // Link para o projeto
    // Caso a API retorne tecnologias associadas ao projeto, adicione aqui
    // technologies?: Technology[]; 
}

