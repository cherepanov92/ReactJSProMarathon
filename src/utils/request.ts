import Url from 'url';
import getUriWithParamsConfig from "./getUriWithParamsConfig";

interface IOptions {
    method: string,
    body?: string
}

interface IGetUriWithParamsConfig {
    method: string,
    uri: Partial<URL>,
    body: object
}

async function req<T>(endpoint: string, query?: object): Promise<T> {
    const {method, uri, body}: IGetUriWithParamsConfig = getUriWithParamsConfig(endpoint, query);

    const options: IOptions = {
        method
    }

    if (Object.keys(body).length > 0) {
        options.body = JSON.stringify(body);
    }
    return await fetch(Url.format(uri), options).then((res) => res.json());
}

export default req;
