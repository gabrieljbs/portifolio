'use server'

import { Query } from '@/lib/api';
import { ProfileData, SocialLink } from '@/types/backend';

/**
 * Busca as tecnologias para exibição na seção de tecnologias.
 * Endpoint esperado: GET /technologies
 * Retorno esperado: Lista de { id, name, logo }
 */

export async function getTechnologies(page = 1, limit = 50) {
    try {
        const data = await Query({
            method: 'GET',
            url: `technologies?page=${page}&limit=${limit}`,
            debug: true
        })

        return {
            technologies: data.data || data,
            total: data.meta?.total || data.total || 0,
            totalPages: data.meta?.lastPage || Math.ceil((data.meta?.total || data.total || 0) / limit)
        }
    } catch (error: any) {
        console.error("Falha ao listar tecnologias:", error)
        return { technologies: [], error: 'Erro ao carregar tecnologias' }
    }
}

/**
 * Busca os links de redes sociais.
 * Endpoint esperado: GET /social-links
 * Retorno esperado: Lista de { id, name, url, icon, isActive }
 */
export async function getSocialLinks(): Promise<SocialLink[]> {
    try {
        const data = await Query({
            method: 'GET',
            url: '/social-links',
            cache: 'force-cache',
            debug: false
        });

        let links: SocialLink[] = [];

        if (Array.isArray(data)) {
            links = data as SocialLink[];
        } else if (data && Array.isArray(data.data)) {
            links = data.data as SocialLink[];
        }

        return links.filter(link => link.isActive !== false);
    } catch (error) {
        return null;
    }
}

/**
 * Busca os dados do perfil.
 */
export async function getProfileData(): Promise<ProfileData | null> {
    try {
        const data = await Query({
            method: 'GET',
            url: '/profile',
            cache: 'force-cache'
        });

        let profiles: ProfileData[] = [];

        if (Array.isArray(data)) {
            profiles = data as ProfileData[];
        } else if (data && Array.isArray(data.data)) {
            profiles = data.data as ProfileData[];
        }

        return profiles.length > 0 ? profiles[0] : null;

    } catch (error) {
        return null;
    }
}
