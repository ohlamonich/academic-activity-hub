import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AahModule } from './aah/aah.module';

@Module({
  imports: [AahModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
