import Url from 'url';
import getUriWithParamsConfig from "./getUriWithParamsConfig";
async function req(endpoint: string) {
    const uri = Url.format(getUriWithParamsConfig(endpoint))
    return await fetch(uri).then((res) => res.json());
}

export default req;
