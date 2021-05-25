import Url from 'url';
import getUriWithParamsConfig from "./getUriWithParamsConfig";
async function req(endpoint: string, query: object) {
    const uri = Url.format(getUriWithParamsConfig(endpoint, query))
    return await fetch(uri).then((res) => res.json());
}

export default req;
