import config from "../config";

function getUriWithParamsConfig(endpointConfig: string, query: object) {
    let url = {
        ...config.client.server,
        ...config.client.endpoint[endpointConfig].uri,
        query
    }
    console.log('uri', url)
    return url;
}

export default getUriWithParamsConfig;