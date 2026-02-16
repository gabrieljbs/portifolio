interface SocialLink {
    name: string;
    url: string;
    icon: string; // URL icon or simple icon slug or svg path
    type: 'email' | 'phone' | 'link';
}

interface ProfileData {
    name: string;
    headline: string;
    description: string;
    email: string;
    phone: string;
    linkedin: string;
    github: string;
}
