import { Injectable } from '@nestjs/common';

@Injectable()
export class BillingService {
  getHello(): string {
    return 'Hello World!';
  }
}
