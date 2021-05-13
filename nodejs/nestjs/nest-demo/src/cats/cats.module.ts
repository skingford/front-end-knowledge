/*
 * @Author: kingford
 * @Date: 2021-05-13 16:45:39
 * @LastEditTime: 2021-05-13 17:15:59
 */
import {
  Module,
  NestModule,
  MiddlewareConsumer,
  RequestMethod,
} from '@nestjs/common';
import { LoggerMiddleware } from '../middleware/logger.middleware';
import { SharedModule } from '../shared/shared.module';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';

@Module({
  imports: [SharedModule],
  controllers: [CatsController],
  providers: [CatsService],
  exports: [CatsService],
})
export class CatsModule implements NestModule {
  constructor(private readonly catsService: CatsService) {}
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes({ path: 'cats', method: RequestMethod.POST });
  }
}
