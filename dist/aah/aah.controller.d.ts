import { AahService } from './aah.service';
import { AahDto, AahDtoConference, AahDtoJournal, AahDtoSciPub, AahDtoUser } from './aah.dto';
export declare class AahController {
    private readonly AahService;
    AahServiceSciPub: any;
    AahServiceUser: any;
    AahServiceJournal: any;
    AahServiceConference: any;
    constructor(AahService: AahService);
    getAah(): Promise<{
        id: number;
        isDone: boolean;
        name: string;
    }[]>;
    getAahSciPub(): Promise<{
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
    }[]>;
    getAahUser(): Promise<{
        name: string;
        surname: string;
        login: string;
        passw: string;
        email: string;
        role: string;
    }[]>;
    getAahJournal(): Promise<{
        name: string;
        theme: string;
        period: string;
        place: string;
        ISSN: string;
        year: number;
        contact: string;
    }[]>;
    getAahConference(): Promise<{
        id: number;
        name: string;
        date: string;
        place: string;
        host: string;
        speaker: string;
        prog: string;
        thesis: string;
    }[]>;
    create(dto: AahDto): Promise<{
        id: number;
        isDone: boolean;
        name: string;
    }>;
    createSciPub(dto: AahDtoSciPub): Promise<{
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
    }>;
    createUser(dto: AahDtoUser): Promise<{
        name: string;
        surname: string;
        login: string;
        passw: string;
        email: string;
        role: string;
    }>;
    createJournal(dto: AahDtoJournal): Promise<{
        name: string;
        theme: string;
        period: string;
        place: string;
        ISSN: string;
        year: number;
        contact: string;
    }>;
    createConference(dto: AahDtoConference): Promise<{
        id: number;
        name: string;
        date: string;
        place: string;
        host: string;
        speaker: string;
        prog: string;
        thesis: string;
    }>;
    toggleDone(id: string): Promise<{
        id: number;
        isDone: boolean;
        name: string;
    }>;
}
