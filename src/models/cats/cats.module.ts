import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { CatController } from './cats.controller';
import { CatService } from './cats.service';
import { LoggerMiddleware } from 'src/common/middlewares/logger.middleware';

@Module({
  imports: [],
  controllers: [CatController],
  providers: [CatService],
  exports: [CatService],
})
export class CatModule {}
