import Url from 'url';
import getUriWithParamsConfig from "./getUriWithParamsConfig";
async function req<T>(endpoint: string, query?: object, uriSuffix?: string | number): Promise<T> {
    const uri = Url.format(getUriWithParamsConfig(endpoint, query, uriSuffix))
    return await fetch(uri).then((res) => res.json());
}

export default req;
