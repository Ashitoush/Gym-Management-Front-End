const request = async (method, url, includeAuth, params = {}) => {
    const req = {
        method: method,
        headers: {
            'Accept': 'application/json',
            'Access-Control-Allow-Headers': '*'
        },
        
    };

    if (includeAuth) {
        req.headers.Authorization = (localStorage.getItem('token')).trim();
    }

    if (method == 'GET') {
        const getParams = new URLSearchParams(params);
        url += `?${getParams}`;
    } else if (params instanceof FormData) {
        req.body = params;
    } else {
        req.headers['Content-Type'] = 'application/json';
        req.body = JSON.stringify(params);
    }

    const res = await fetch(url, req);
    const data = await res.json();
    if (res.failed || !res.ok) {
        throw new ResponseError(data.message, data.errors);
    }

    return data;
};

class ResponseError extends Error {
    constructor(msg, errors) {
        super(msg);
        this.errors = errors;
    }
}