import instance from "./config";
export async function mutationAPI(url, method, data, headers, configs) {
    const config = {
        url,
        method,
        data,
        ...configs,
    };
    if (headers) config.headers = headers;
    try {
        return await instance(config);
    } catch (error) {
        const err = error
        return {
            status: err.response === undefined ? false : err.response.status,
            err,
        }
    }
}


export async function getQueryAPI(url, method, params) {
        const config = {
            url,
            method,
            params
        };
        try {
            return await instance(config);
        } catch (error) {
            const err = error
            return {
                status: err.response === undefined ? false : err.response.status,
                err,
            };
        }
}