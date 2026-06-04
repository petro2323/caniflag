import type { Country } from "../types/country";

const BASE_URL = "https://restcountries.com/v3.1";

const FIELDS = 'name,flags,region,subregion,continents,capital,population,languages,currencies';

export const getAllCountries = async (gameType: string): Promise<Country[]> => {
    const response = await fetch(`${BASE_URL}/independent?status=true&fields=${FIELDS}`);

    if (!response.ok) throw new Error("Failed to fetch countries");

    const data: Country[] = await response.json();

    if (gameType !== "World") return data.filter(c => c.continents.includes(gameType));

    return data;
}