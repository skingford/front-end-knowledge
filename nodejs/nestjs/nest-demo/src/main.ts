/*
 * @Author: kingford
 * @Date: 2021-05-13 09:51:36
 * @LastEditTime: 2021-05-13 17:20:57
 */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //app.use(logger); //全局中间件
  await app.listen(3000);
}
bootstrap();
