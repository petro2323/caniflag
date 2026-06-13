export interface Country {
    flags: {
        svg: string
    }
    name: {
        common: string
        official: string
    }
    continents: string[]
    initials?: string[]
}