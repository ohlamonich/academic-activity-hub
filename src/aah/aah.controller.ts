import { Body, Controller, Get, Param, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { AahService } from './aah.service';
import { AahDto, AahDtoConference, AahDtoJournal, AahDtoSciPub, AahDtoUser } from './aah.dto';

@Controller('aah')
export class AahController {
	AahServiceSciPub: any;
	AahServiceUser: any;
	AahServiceJournal: any;
	AahServiceConference: any;
	constructor(private readonly AahService: AahService) {}

	@Get()
  async getAah(){
		return this.AahService.getAll()
	}

	@Get("sci-pub")
  async getAahSciPub(){
		return this.AahService.getAllSciPub()
	}

	@Get("user")
  async getAahUser(){
		return this.AahService.getAllUser()
	}

	@Get("journal")
  async getAahJournal(){
		return this.AahService.getAllJournal()
	}

	@Get("conference")
  async getAahConference(){
		return this.AahService.getAllConference()
	}

	@Post()
	@UsePipes(new ValidationPipe)
	async create(@Body() dto: AahDto){
		return this.AahService.create(dto)
	}

	@Post("sci-pub")
	@UsePipes(new ValidationPipe)
	async createSciPub(@Body() dto: AahDtoSciPub){
		return this.AahService.createSciPub(dto)
	}

	@Post("user")
	@UsePipes(new ValidationPipe)
	async createUser(@Body() dto: AahDtoUser){
		return this.AahService.createUser(dto)
	}

	@Post("journal")
	@UsePipes(new ValidationPipe)
	async createJournal(@Body() dto: AahDtoJournal){
		return this.AahService.createJournal(dto)
	}

	@Post("conference")
	@UsePipes(new ValidationPipe)
	async createConference(@Body() dto: AahDtoConference){
		return this.AahService.createConference(dto)
	}

	@Patch(":id")
	async toggleDone(@Param('id') id: string) {
		return this.AahService.toggleDone(id)
	}
}
