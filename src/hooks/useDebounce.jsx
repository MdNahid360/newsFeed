import { useEffect } from 'react';

const useDebounce = (callback, delay) => {
    useEffect(() => {
        const timerId = setTimeout(callback, delay);

        return () => clearTimeout(timerId);
    }, [callback, delay]);
};

export default useDebounce;
