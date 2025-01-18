import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { UsersController } from './users/users.controller';


@Module({
  imports: [DatabaseModule],
  controllers: [AppController, UsersController],
  providers: [AppService],
})
export class AppModule {}
