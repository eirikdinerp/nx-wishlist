/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';
import { Transport } from '@nestjs/common/enums/transport.enum';
import { Logger } from '@nestjs/common';
import { NestMicroserviceOptions } from '@nestjs/common/interfaces/microservices/nest-microservice-options.interface';
import { TcpOptions } from '@nestjs/common/interfaces/microservices/microservice-configuration.interface';

const logger = new Logger();

async function bootstrap() {
  const msPort: number = 8888;
  const msHost: string = '0.0.0.0';

  const opts: TcpOptions = {
    transport: Transport.TCP,
    options: {
      host: msHost,
      port: msPort
    }
  };
  const app = await NestFactory.createMicroservice(AppModule, opts);

  app.listen(() => logger.log('Email Service listening'));
}

bootstrap();
