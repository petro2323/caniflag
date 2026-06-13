import type { Country } from "../types/country";
import countriesData from "../data/countries.json";

// const BASE_URL = "https://restcountries.com/v3.1";

// const FIELDS = 'name,flags,region,subregion,continents,capital,population,languages,currencies';

const countries = countriesData as Country[];

export const getAllCountries = (gameType: string): Country[] => {
    // const response = await fetch(`${BASE_URL}/independent?status=true&fields=${FIELDS}`);

    // if (!response.ok) throw new Error("Failed to fetch countries");

    // const data: Country[] = await response.json();

    if (gameType !== "World") return countries.filter(c => c.continents.includes(gameType));

    return countries;
}