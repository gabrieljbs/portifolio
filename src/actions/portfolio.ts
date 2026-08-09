"use server";

import { Query } from "@/lib/api";
import { ApiResponse, ProfileData, ProjectData, SocialLink, Technology } from "@/types/api";

export async function getProfileData(): Promise<ProfileData | null> {
  try {
    const res = await Query<ApiResponse<ProfileData>>({ url: "/profile" });
    return res?.data ?? null;
  } catch (error) {
    console.error("Falha ao buscar perfil:", error);
    return null;
  }
}

export async function getTechnologies(): Promise<Technology[]> {
  try {
    const res = await Query<ApiResponse<Technology[]>>({ url: "/technologies" });
    return res?.data ?? [];
  } catch (error) {
    console.error("Falha ao buscar tecnologias:", error);
    return [];
  }
}

export async function getProjects(): Promise<ProjectData[]> {
  try {
    const res = await Query<ApiResponse<ProjectData[]>>({ url: "/projects" });
    return res?.data ?? [];
  } catch (error) {
    console.error("Falha ao buscar projetos:", error);
    return [];
  }
}

export async function getSocialLinks(): Promise<SocialLink[]> {
  try {
    const res = await Query<ApiResponse<SocialLink[]>>({ url: "/social-links" });
    return res?.data ?? [];
  } catch (error) {
    console.error("Falha ao buscar links sociais:", error);
    return [];
  }
}
