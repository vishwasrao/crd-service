import { Module } from '@nestjs/common';
import { CrdModule } from './crd/crd.module';

@Module({
  imports: [CrdModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
