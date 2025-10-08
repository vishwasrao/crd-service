import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/crd (POST) should return a CDS Hooks info card', async () => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    const res = await request(app.getHttpServer())
      .post('/crd')
      .send({})
      .expect(201);

    expect(res.body).toBeDefined();
    expect(Array.isArray(res.body.cards)).toBe(true);
    expect(res.body.cards[0].summary).toMatch(/Prior Authorization/i);
  });
});
