import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatModule } from './models/cats/cats.module';
import { LoggerMiddleware } from './common/middlewares/logger.middleware';
import { DogModule } from './models/dogs/dogs.module';
import { DogController } from './models/dogs/dogs.controller';
import { HttpExceptionFilterProvider } from './common/filter/http-exception.filter';
import { AllExceptionsFilterProvider } from './common/filter/all-exceptions.filter';

@Module({
  imports: [CatModule, DogModule],
  controllers: [AppController],
  providers: [AllExceptionsFilterProvider, AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes(DogController);
  }
}
