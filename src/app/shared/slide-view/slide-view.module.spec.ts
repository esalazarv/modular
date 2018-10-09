import { SlideViewModule } from './slide-view.module';

describe('SlideViewModule', () => {
  let slideViewModule: SlideViewModule;

  beforeEach(() => {
    slideViewModule = new SlideViewModule();
  });

  it('should create an instance', () => {
    expect(slideViewModule).toBeTruthy();
  });
});
