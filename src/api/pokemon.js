import { API_HOST } from "../utils/constants";



export async function getPokemonApi() {
    try {
        const url = `${API_HOST}/pokemon?limit=20&offset=0`;
        console.log(url);        
        const resp = await fetch(url);
        const result = await resp.json();
        console.log(result);
        return result;
    } catch (error) {
        throw error;
    }
}

export async function getPokemonDetailbyUrlApi(url) {
    try {
        const response = await fetch(url);
        const result = await response.json();
        return result;
    } catch (error) {
        throw error;
    }
}