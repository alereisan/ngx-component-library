import { SuccessModule } from './success.module';

describe('SuccessModule', () => {
  let successModule: SuccessModule;

  beforeEach(() => {
    successModule = new SuccessModule();
  });

  it('should create an instance', () => {
    expect(successModule).toBeTruthy();
  });
});
