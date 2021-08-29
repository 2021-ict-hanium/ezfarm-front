import { useState, useCallback } from '../src/node_modules/@types/react';

const useSwitch = (initValue: boolean) => {
    const [value, setter] = useState(initValue);
    const handler = useCallback((v) => {
        setter(v);
    }, []);
    return [value, handler] as const;
};

export default useSwitch;
