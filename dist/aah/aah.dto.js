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
exports.AahDtoConference = exports.AahDtoJournal = exports.AahDtoUser = exports.AahDtoSciPub = exports.AahDto = void 0;
const class_validator_1 = require("class-validator");
class AahDto {
}
exports.AahDto = AahDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AahDto.prototype, "name", void 0);
class AahDtoSciPub {
}
exports.AahDtoSciPub = AahDtoSciPub;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AahDtoSciPub.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AahDtoSciPub.prototype, "author", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AahDtoSciPub.prototype, "pubDate", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AahDtoSciPub.prototype, "DOI", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AahDtoSciPub.prototype, "ISSN", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AahDtoSciPub.prototype, "link", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AahDtoSciPub.prototype, "type", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AahDtoSciPub.prototype, "lang", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AahDtoSciPub.prototype, "journal", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AahDtoSciPub.prototype, "place", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], AahDtoSciPub.prototype, "volume", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], AahDtoSciPub.prototype, "page", void 0);
class AahDtoUser {
}
exports.AahDtoUser = AahDtoUser;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AahDtoUser.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AahDtoUser.prototype, "surname", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsDefined)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], AahDtoUser.prototype, "login", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AahDtoUser.prototype, "passw", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AahDtoUser.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AahDtoUser.prototype, "role", void 0);
class AahDtoJournal {
}
exports.AahDtoJournal = AahDtoJournal;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AahDtoJournal.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AahDtoJournal.prototype, "theme", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AahDtoJournal.prototype, "period", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AahDtoJournal.prototype, "place", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsDefined)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], AahDtoJournal.prototype, "ISSN", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], AahDtoJournal.prototype, "year", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AahDtoJournal.prototype, "contact", void 0);
class AahDtoConference {
}
exports.AahDtoConference = AahDtoConference;
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsDefined)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], AahDtoConference.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AahDtoConference.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AahDtoConference.prototype, "date", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AahDtoConference.prototype, "place", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AahDtoConference.prototype, "host", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AahDtoConference.prototype, "speaker", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AahDtoConference.prototype, "prog", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AahDtoConference.prototype, "thesis", void 0);
//# sourceMappingURL=aah.dto.js.map