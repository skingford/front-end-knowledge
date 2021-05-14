import { APP_FILTER } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { HttpExceptionFilter } from './exception/http-exception.filter';
import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { GlobalModule } from './global/global.module';
import { UserModule } from './user/user.module';
import { CatsModule } from './cats/cats.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { LoggerMiddleware } from './middleware/logger.middleware';
import { Logger2Middleware } from './middleware/logger2.middleware';
import { User } from './user/user.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'nest_demo',
      entities: [User],
      synchronize: true,
      autoLoadEntities: true,
    }),
    UserModule,
    GlobalModule,
    CatsModule,
  ],
  controllers: [AppController],
  providers: [
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
    AppService,
  ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware, Logger2Middleware)
      .exclude(
        // { path: 'cats', method: RequestMethod.GET },
        { path: 'cats', method: RequestMethod.POST },
        'cats/(.*)',
      )
      .forRoutes(CatsController);
  }
}
