import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { GlobalModule } from './global/global.module';
import { SharedModule } from './shared/shared.module';
import { CatsModule } from './cats/cats.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { LoggerMiddleware } from './middleware/logger.middleware';
import { Logger2Middleware } from './middleware/logger2.middleware';

@Module({
  imports: [GlobalModule, SharedModule, CatsModule],
  controllers: [AppController],
  providers: [AppService],
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
