import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { DogController } from '../dogs/dogs.controller';
import { DogService } from '../dogs/dogs.service';
import { LoggerMiddleware } from 'src/common/middlewares/logger.middleware';

@Module({
  imports: [],
  controllers: [DogController],
  providers: [DogService],
  exports: [DogService],
})
export class DogModule {}
