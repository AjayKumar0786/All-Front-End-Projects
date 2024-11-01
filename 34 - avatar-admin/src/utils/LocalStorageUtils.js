export const getLocalStorage = (key) => {
    try {
        const value = localStorage.getItem(key)
        return value ? JSON.parse(value) : null
    } catch (error) {
        console.log('local storage get error', error)
        return null;
    }
};

export const setLocalStorage = (key, value) => {
    try {
        localStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
        console.log('local storage setItem error', error);
    }
};


export const removeLocalStorage = (key) => {
    try {
        const value = localStorage.removeItem(key)
    } catch (error) {
        console.log('local storage removeItem error', error)
    }
};