import { Module } from '@nestjs/common';
import { AahService } from './aah.service';
import { AahController } from './aah.controller';
import { PrismaService } from '../prisma.service';

@Module({
	controllers: [AahController],
	providers: [AahService, PrismaService],
})
export class AahModule {}
