import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SocketIoAdapter } from './adapters/socket-io.adapters';

declare const module: any;

async function bootstrap() {
  //console.log(join(__dirname, '/../**/*.entity.{js,ts}'));
  //console.log(__dirname + '/../**/*.entity.{js,ts}');

  const app = await NestFactory.create(AppModule);
  await app.listen(3000);

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
  app.useWebSocketAdapter(new SocketIoAdapter(app));
}
bootstrap();
