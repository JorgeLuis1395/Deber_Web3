import {MiddlewareConsumer, Module, NestModule} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {ParametrosController} from "./parametros.controller";
import {LogMiddleware} from "./log.middleware";

@Module({
  imports: [],
  controllers: [AppController,ParametrosController],
  providers: [AppService],
})
export class AppModule implements NestModule {
    nombreAplicacion = 'EPN';

    configure(consumer: MiddlewareConsumer)
        : void {
        consumer
            .apply(LogMiddleware)
            .with(this.nombreAplicacion, 2018)
            .forRoutes(
                AppController,
                ParametrosController
            )

    }
}