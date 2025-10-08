import { Injectable } from '@nestjs/common';

@Injectable()
export class CrdService {
    getCrdCard() {
        // Hard-coded CDS Hooks Info card saying prior authorization is not needed for this CPT code
        return {
            cards: [
                {
                    summary: 'Prior Authorization not needed',
                    detail:
                        'Prior authorization is not needed for this CPT code based on current rules.',
                    indicator: 'info',
                    source: {
                        label: 'CRD Service',
                        url: 'https://example-crd-service.local',
                    },
                    links: [
                        {
                            label: 'More info',
                            url: 'https://example-crd-service.local/docs/prior-auth',
                        },
                    ],
                },
            ],
        };
    }
}
