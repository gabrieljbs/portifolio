const BASE_URL = process.env.NEXT_PUBLIC_API_URL || '';

export interface FetchOptions extends Omit<RequestInit, 'body'> {
  url: string;
  debug?: boolean;
  body?: any;
}

export async function Query<T>({ method = 'GET', url, debug = false, body, headers, cache, ...rest }: FetchOptions): Promise<T> {
  try {
    if (!BASE_URL) {
      console.error('[Query Error]: NEXT_PUBLIC_API_URL não está definida nas variáveis de ambiente.');
      return null as unknown as T;
    }

    const requestHeaders: Record<string, string> = {
      'Content-Type': 'application/json',
    };

    if (headers) {
      if (headers instanceof Headers) {
        headers.forEach((value, key) => {
          requestHeaders[key] = value;
        });
      } else if (Array.isArray(headers)) {
        headers.forEach(([key, value]) => {
          requestHeaders[key] = value;
        });
      } else {
        Object.assign(requestHeaders, headers);
      }
    }

    const cleanBaseUrl = BASE_URL.endsWith('/') ? BASE_URL.slice(0, -1) : BASE_URL;
    const cleanEndpoint = url.startsWith('/') ? url : `/${url}`;
    const finalUrl = `${cleanBaseUrl}${cleanEndpoint}`;

    if (debug) {
      console.log(`[Query Debug] URL: ${finalUrl} | Method: ${method}`);
    }

    const config: RequestInit = {
      method,
      headers: requestHeaders,
      ...(cache ? { cache } : {}),
      ...rest,
    };

    if (body && typeof body === 'object') {
      config.body = JSON.stringify(body);
    }

    const response = await fetch(finalUrl, config);
    let data: any = null;

    try {
      data = await response.json();
    } catch {
      // Empty JSON response
    }

    if (response.status === 404) {
      return (data || { status: 'not_found', data: null }) as T;
    }

    if (!response.ok) {
      const errorMessage = data?.message || `Erro na requisicao (${response.status}): ${response.statusText}`;
      throw new Error(errorMessage);
    }

    return data;
  } catch (error: any) {
    if (debug) {
      console.error('[Query Error]:', error);
    }
    // Retorna nulo/objeto vazio graciosamente se a requisição falhar (ex: durante a build estática sem a env configurada)
    return null as unknown as T;
  }
}
