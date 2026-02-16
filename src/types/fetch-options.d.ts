interface FetchOptions {
    method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
    url: string;
    debug?: boolean;
    body?: any;
    headers?: HeadersInit;
    cache?: RequestCache;
}