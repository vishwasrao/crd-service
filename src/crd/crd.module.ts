import { Module } from '@nestjs/common';
import { CrdController } from './crd.controller';
import { CrdService } from './crd.service';

@Module({
    controllers: [CrdController],
    providers: [CrdService],
})
export class CrdModule { }
