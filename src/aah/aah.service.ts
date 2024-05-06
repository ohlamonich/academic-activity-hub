import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { AahDto, AahDtoConference, AahDtoJournal, AahDtoSciPub, AahDtoUser } from './aah.dto';

@Injectable()
export class AahService {
	constructor(private prisma: PrismaService){}

	async getById(id: string) {
		const task = await this.prisma.task.findUnique({
			where: {
				id: +id
			}
		})

		if (!task) throw new NotFoundException

		return task
	}

	getAll() {
		return this.prisma.task.findMany()
	}

	getAllSciPub() {
		return this.prisma.sciPub.findMany()
	}

	getAllUser() {
		return this.prisma.user.findMany()
	}

	getAllJournal() {
		return this.prisma.journal.findMany()
	}

	getAllConference() {
		return this.prisma.conference.findMany()
	}

	create(dto: AahDto){
		return this.prisma.task.create({
			data: dto
		})
	}

	createSciPub(dto: AahDtoSciPub){
		return this.prisma.sciPub.create({
			data: dto
		})
	}

	createUser(dto: AahDtoUser){
		return this.prisma.user.create({
			data: dto
		})
	}

	createJournal(dto: AahDtoJournal){
		return this.prisma.journal.create({
			data: dto
		})
	}

	createConference(dto: AahDtoConference){
		return this.prisma.conference.create({
			data: dto
		})
	}

	async toggleDone(id:string) {
		const task = await this.getById(id)

		return this.prisma.task.update({
			where: {
				id: task.id
			},
			data: {
				isDone: !task.isDone
			}
		})
	}
}
