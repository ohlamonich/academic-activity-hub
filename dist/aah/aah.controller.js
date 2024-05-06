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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AahController = void 0;
const common_1 = require("@nestjs/common");
const aah_service_1 = require("./aah.service");
const aah_dto_1 = require("./aah.dto");
let AahController = class AahController {
    constructor(AahService) {
        this.AahService = AahService;
    }
    async getAah() {
        return this.AahService.getAll();
    }
    async getAahSciPub() {
        return this.AahService.getAllSciPub();
    }
    async getAahUser() {
        return this.AahService.getAllUser();
    }
    async getAahJournal() {
        return this.AahService.getAllJournal();
    }
    async getAahConference() {
        return this.AahService.getAllConference();
    }
    async create(dto) {
        return this.AahService.create(dto);
    }
    async createSciPub(dto) {
        return this.AahService.createSciPub(dto);
    }
    async createUser(dto) {
        return this.AahService.createUser(dto);
    }
    async createJournal(dto) {
        return this.AahService.createJournal(dto);
    }
    async createConference(dto) {
        return this.AahService.createConference(dto);
    }
    async toggleDone(id) {
        return this.AahService.toggleDone(id);
    }
};
exports.AahController = AahController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AahController.prototype, "getAah", null);
__decorate([
    (0, common_1.Get)("sci-pub"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AahController.prototype, "getAahSciPub", null);
__decorate([
    (0, common_1.Get)("user"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AahController.prototype, "getAahUser", null);
__decorate([
    (0, common_1.Get)("journal"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AahController.prototype, "getAahJournal", null);
__decorate([
    (0, common_1.Get)("conference"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AahController.prototype, "getAahConference", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UsePipes)(new common_1.ValidationPipe),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [aah_dto_1.AahDto]),
    __metadata("design:returntype", Promise)
], AahController.prototype, "create", null);
__decorate([
    (0, common_1.Post)("sci-pub"),
    (0, common_1.UsePipes)(new common_1.ValidationPipe),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [aah_dto_1.AahDtoSciPub]),
    __metadata("design:returntype", Promise)
], AahController.prototype, "createSciPub", null);
__decorate([
    (0, common_1.Post)("user"),
    (0, common_1.UsePipes)(new common_1.ValidationPipe),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [aah_dto_1.AahDtoUser]),
    __metadata("design:returntype", Promise)
], AahController.prototype, "createUser", null);
__decorate([
    (0, common_1.Post)("journal"),
    (0, common_1.UsePipes)(new common_1.ValidationPipe),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [aah_dto_1.AahDtoJournal]),
    __metadata("design:returntype", Promise)
], AahController.prototype, "createJournal", null);
__decorate([
    (0, common_1.Post)("conference"),
    (0, common_1.UsePipes)(new common_1.ValidationPipe),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [aah_dto_1.AahDtoConference]),
    __metadata("design:returntype", Promise)
], AahController.prototype, "createConference", null);
__decorate([
    (0, common_1.Patch)(":id"),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AahController.prototype, "toggleDone", null);
exports.AahController = AahController = __decorate([
    (0, common_1.Controller)('aah'),
    __metadata("design:paramtypes", [aah_service_1.AahService])
], AahController);
//# sourceMappingURL=aah.controller.js.map