import { Controller, Post, Body } from '@nestjs/common';
import { CrdService } from './crd.service';

@Controller()
export class CrdController {
    constructor(private readonly crdService: CrdService) { }

    // CRD endpoint - accepts a POST body (not used) and returns a CDS Hooks-style info card
    @Post('crd')
    crd(@Body() _body: unknown) {
        return this.crdService.getCrdCard();
    }
}
