"use server"
const BASE_URL = process.env.NEXT_PUBLIC_URL_API;
export async function Query({ method, url, debug = false, body, headers, cache }: FetchOptions) {

    try {
        const requestHeaders: Record<string, string> = {
            'Content-Type': 'application/json',
        };

        // Merge manual de headers customizados if necessary
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

        const config: RequestInit = {
            method: method,
            headers: requestHeaders,
            cache: cache,
        };

        if (body) {
            config.body = JSON.stringify(body);
        }

        if (!BASE_URL) {
            throw new Error("A variável NEXT_PUBLIC_URL_API não está definida.");
        }

        const cleanBaseUrl = BASE_URL.endsWith('/') ? BASE_URL.slice(0, -1) : BASE_URL;
        const cleanEndpoint = url.startsWith('/') ? url : `/${url}`;
        const finalUrl = `${cleanBaseUrl}${cleanEndpoint}`;

        if (debug) {
            console.log(`\n🔵 [Query Debug]`);
            console.log(`[URL] - ${finalUrl}`);
            console.log(`[Method] - ${method}`);
            console.log(`[Headers] - ${JSON.stringify(requestHeaders, null, 2)}`);
            if (body) console.log(`[Body] - ${JSON.stringify(body)}`);
        }

        const response = await fetch(finalUrl, config);

        // Parsing seguro
        let data: any = null;
        try {
            data = await response.json();
        } catch (e) { } // Sem corpo JSON

        if (debug) {
            console.log(`[Status] - ${response.status}`);
            console.log(`[Response] -`, data);
            console.log(`-------------------------`);
        }

        if (!response.ok) {
            const errorMessage = data?.message || `Erro na requisição (${response.status}): ${response.statusText || 'Sem detalhes'}`;
            // Este erro será capturado pela Server Action e repassado ao componente de UI (Toast)
            throw new Error(errorMessage);
        }

        return data;

    } catch (error: any) {
        if (debug) {
            console.error("🔴 [Query Error]:", error);
        }
        throw error;
    }
}
