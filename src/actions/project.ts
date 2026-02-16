'use server'

import { Query } from '@/lib/api';
import { ProjectData } from '@/types/backend';

/**
 * Busca a lista de projetos do usuário.
 * Assume que o endpoint é GET /projects
 */
export async function getProjects(): Promise<ProjectData[]> {
    try {
        const data = await Query({
            method: 'GET',
            url: '/projects',
            cache: 'force-cache',
            debug: false
        });

        if (Array.isArray(data)) {
            return data as ProjectData[];
        }

        if (data && Array.isArray(data.data)) {
            return data.data as ProjectData[];
        }

        return [];
    } catch (error) {
        console.warn("⚠️ API não disponível para projetos, usando dados locais.");
        const { projetos } = await import('@/data/projetos');
        return projetos;
    }
}

/**
 * Busca detalhes de um projeto específico.
 */
export async function getProjectById(id: string | number): Promise<ProjectData | null> {
    try {
        const data = await Query({
            method: 'GET',
            url: `/projects/${id}`,
            cache: 'force-cache'
        });
        return data as ProjectData;
    } catch (error) {
        console.error(`Erro ao buscar projeto ${id}:`, error);
        return null;
    }
}
