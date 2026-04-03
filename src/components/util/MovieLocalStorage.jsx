// create localstorge custom hook to store fav movies
import { useState } from "react";

const useLocalStorage = (key, initialValue) => {
    const [value, setValue] = useState(() => {
        const storedValue = localStorage.getItem(key);
        return storedValue ? JSON.parse(storedValue) : initialValue;
    });

    const updateValue = (newValue) => {
        localStorage.setItem(key, JSON.stringify(newValue));
        setValue(newValue);
    };

    return [value, updateValue];
};

export default useLocalStorage;

