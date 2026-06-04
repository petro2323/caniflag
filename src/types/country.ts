export interface Country {
    name: {
        common: string,
        official: string,
        nativeName?: {
            [key: string]: {
                official: string,
                common: string
            }
        }
    },
    flags: {
        svg: string,
        png: string,
        alt: string
    }
    region: string,
    subregion?: string,
    continents: string[],
    capital?: string[],
    population: number,
    languages?: { 
        [key: string]: string
    },
    currencies?: {
        [key: string]: {
            symbol: string,
            name: string
        }
    }
}