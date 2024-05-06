"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AahService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
let AahService = class AahService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getById(id) {
        const task = await this.prisma.task.findUnique({
            where: {
                id: +id
            }
        });
        if (!task)
            throw new common_1.NotFoundException;
        return task;
    }
    getAll() {
        return this.prisma.task.findMany();
    }
    getAllSciPub() {
        return this.prisma.sciPub.findMany();
    }
    getAllUser() {
        return this.prisma.user.findMany();
    }
    getAllJournal() {
        return this.prisma.journal.findMany();
    }
    getAllConference() {
        return this.prisma.conference.findMany();
    }
    create(dto) {
        return this.prisma.task.create({
            data: dto
        });
    }
    createSciPub(dto) {
        return this.prisma.sciPub.create({
            data: dto
        });
    }
    createUser(dto) {
        return this.prisma.user.create({
            data: dto
        });
    }
    createJournal(dto) {
        return this.prisma.journal.create({
            data: dto
        });
    }
    createConference(dto) {
        return this.prisma.conference.create({
            data: dto
        });
    }
    async toggleDone(id) {
        const task = await this.getById(id);
        return this.prisma.task.update({
            where: {
                id: task.id
            },
            data: {
                isDone: !task.isDone
            }
        });
    }
};
exports.AahService = AahService;
exports.AahService = AahService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AahService);
//# sourceMappingURL=aah.service.js.map