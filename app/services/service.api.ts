const baseUrl = "https://jsonplaceholder.typicode.com/";

export const getData = async<T,> ({endpoint}: {endpoint: string}): Promise<T> => {
    const response = await fetch(baseUrl+endpoint);
    return await response.json() as T;
}