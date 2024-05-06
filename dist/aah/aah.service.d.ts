import { PrismaService } from 'src/prisma.service';
import { AahDto, AahDtoConference, AahDtoJournal, AahDtoSciPub, AahDtoUser } from './aah.dto';
export declare class AahService {
    private prisma;
    constructor(prisma: PrismaService);
    getById(id: string): Promise<{
        id: number;
        isDone: boolean;
        name: string;
    }>;
    getAll(): import(".prisma/client").Prisma.PrismaPromise<{
        id: number;
        isDone: boolean;
        name: string;
    }[]>;
    getAllSciPub(): import(".prisma/client").Prisma.PrismaPromise<{
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
    getAllUser(): import(".prisma/client").Prisma.PrismaPromise<{
        name: string;
        surname: string;
        login: string;
        passw: string;
        email: string;
        role: string;
    }[]>;
    getAllJournal(): import(".prisma/client").Prisma.PrismaPromise<{
        name: string;
        theme: string;
        period: string;
        place: string;
        ISSN: string;
        year: number;
        contact: string;
    }[]>;
    getAllConference(): import(".prisma/client").Prisma.PrismaPromise<{
        id: number;
        name: string;
        date: string;
        place: string;
        host: string;
        speaker: string;
        prog: string;
        thesis: string;
    }[]>;
    create(dto: AahDto): import(".prisma/client").Prisma.Prisma__TaskClient<{
        id: number;
        isDone: boolean;
        name: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    createSciPub(dto: AahDtoSciPub): import(".prisma/client").Prisma.Prisma__SciPubClient<{
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
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    createUser(dto: AahDtoUser): import(".prisma/client").Prisma.Prisma__UserClient<{
        name: string;
        surname: string;
        login: string;
        passw: string;
        email: string;
        role: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    createJournal(dto: AahDtoJournal): import(".prisma/client").Prisma.Prisma__JournalClient<{
        name: string;
        theme: string;
        period: string;
        place: string;
        ISSN: string;
        year: number;
        contact: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    createConference(dto: AahDtoConference): import(".prisma/client").Prisma.Prisma__ConferenceClient<{
        id: number;
        name: string;
        date: string;
        place: string;
        host: string;
        speaker: string;
        prog: string;
        thesis: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    toggleDone(id: string): Promise<{
        id: number;
        isDone: boolean;
        name: string;
    }>;
}
