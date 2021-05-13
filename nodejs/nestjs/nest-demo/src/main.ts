/*
 * @Author: kingford
 * @Date: 2021-05-13 09:51:36
 * @LastEditTime: 2021-05-13 17:57:29
 */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //app.use(logger); //全局中间件
  //app.useGlobalFilters(new HttpExceptionFilter()); //全局错误过滤器
  //app.useGlobalPipes(new ValidationPipe()); 全局管道
  await app.listen(3000);
}
bootstrap();
