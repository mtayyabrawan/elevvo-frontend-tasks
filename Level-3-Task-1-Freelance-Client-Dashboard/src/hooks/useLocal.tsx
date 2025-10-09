function useLocal() {
    function setLocal<T>({ key, value }: { key: string; value: T }): void {
        localStorage.setItem(key, JSON.stringify(value));
    }

    function getLocal<T>(key: string): T | null {
        const localData = localStorage.getItem(key);
        if (!localData) {
            return null;
        }
        const parsedData = JSON.parse(localData!) as T;
        return parsedData;
    }

    function removeLocal(key: string): void {
        localStorage.removeItem(key);
    }
    return { setLocal, getLocal, removeLocal };
}

export default useLocal;
