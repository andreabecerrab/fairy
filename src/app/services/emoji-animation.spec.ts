import { TestBed } from '@angular/core/testing';

import { EmojiAnimation } from './emoji-animation';

describe('EmojiAnimation', () => {
  let service: EmojiAnimation;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmojiAnimation);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
