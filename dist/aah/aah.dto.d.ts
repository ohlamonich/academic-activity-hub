export declare class AahDto {
    name: string;
}
export declare class AahDtoSciPub {
    name: string;
    author: string;
    pubDate: string;
    DOI: string;
    ISSN: string;
    link: string;
    type: string;
    lang: string;
    journal: string;
    place: string;
    volume: number;
    page: number;
}
export declare class AahDtoUser {
    name: string;
    surname: string;
    login: string;
    passw: string;
    email: string;
    role: string;
}
export declare class AahDtoJournal {
    name: string;
    theme: string;
    period: string;
    place: string;
    ISSN: string;
    year: number;
    contact: string;
}
export declare class AahDtoConference {
    id: number;
    name: string;
    date: string;
    place: string;
    host: string;
    speaker: string;
    prog: string;
    thesis: string | null;
}
