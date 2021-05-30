import {useEffect, useState} from "react";

const useDebounce = (value: string, delay: number) => {
    const [debounceValue, setDebounceValue] = useState(value);

    useEffect(() => {
       const hendler = setTimeout(() => {
            setDebounceValue(value);
        }, delay);
        return () => {
            clearInterval(hendler);
        }
    }, [value])

    return debounceValue;
}

export default useDebounce;