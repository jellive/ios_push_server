import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NotificationModule } from './notification/notification.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: 3306,
      username: process.env.DB_NAME,
      password: process.env.DB_PASSWORD,
      database: 'in_app-notification',
      entities: [Notification],
      synchronize: true,
    }),
    NotificationModule,
  ],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
