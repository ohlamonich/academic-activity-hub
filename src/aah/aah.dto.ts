import { IsDefined, IsInt, IsNotEmpty, IsString } from "class-validator";

export class AahDto {
	@IsString()
	name:string;
}

export class AahDtoSciPub {
	@IsString()
	name:string;

	@IsString()
	author:string;

	@IsString()
	pubDate:string;

	@IsString()
	DOI:string;

	@IsString()
	ISSN:string;

	@IsString()
	link:string;

	@IsString()
	type:string;

	@IsString()
	lang:string;

	@IsString()
	journal:string;

	@IsString()
	place:string;

	@IsInt()
	volume:number;

	@IsInt()
	page:number;
}

export class AahDtoUser {
	@IsString()
	name: string;

	@IsString()
	surname: string;

	@IsString()
	@IsDefined()
	@IsNotEmpty()
	login: string;

	@IsString()
	passw: string;

	@IsString()
	email: string;

	@IsString()
	role: string;
}

export class AahDtoJournal {
	@IsString()
	name: string;

	@IsString()
	theme: string;

	@IsString()
	period: string;

	@IsString()
	place: string;

	@IsString()
	@IsDefined()
	@IsNotEmpty()
	ISSN: string;

	@IsInt()
	year: number;

	@IsString()
	contact: string;
}

export class AahDtoConference {
	@IsInt()
	@IsDefined()
	@IsNotEmpty()
	id: number;

	@IsString()
	name: string;

	@IsString()
	date: string;

	@IsString()
	place: string;

	@IsString()
	host: string;

	@IsString()
	speaker: string;

	@IsString()
	prog: string;

	@IsString()
	thesis: string | null;
}