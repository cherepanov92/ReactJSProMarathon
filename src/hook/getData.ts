import {useEffect, useState} from "react";
import req from "../utils/request";

const useData = (endpoint: string, query: object ) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const getData = async() => {
            setIsLoading(true);
            try {
                const result = await req(endpoint, query);
                setData(result);
            } catch (e) {
                setIsError(true);
            } finally {
                setIsLoading(false);
            }
        };

        getData();
    }, [JSON.stringify(query)]);

    return {
        data,
        isLoading,
        isError,
    }
}

export default useData;
