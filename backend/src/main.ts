import 'reflect-metadata'
import { Module, ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { JobsController } from './jobs/jobs.controller'
import { JobsService } from './jobs/jobs.service'

@Module({
  controllers: [JobsController],
  providers: [JobsService],
})
class AppModule {}

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
    }),
  )

  await app.listen(3000)

  console.log('Server running on http://localhost:3000')
}

bootstrap()
