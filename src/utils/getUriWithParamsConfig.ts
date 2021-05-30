import config from "../config";

function getUriWithParamsConfig(endpointConfig: string, query?: object, uriSuffix?: string | number) {
    let url = {
        ...config.client.server,
        ...config.client.endpoint[endpointConfig].uri,
        query,
    }

    if (uriSuffix) {
        url.pathname = `${url.pathname}/${uriSuffix}`;
    }

    return url;
}

export default getUriWithParamsConfig;