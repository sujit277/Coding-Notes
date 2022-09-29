import { TestBed } from '@angular/core/testing';

import { LoggerService } from './logger.service';

describe('LoggerService', () => {
  let service: LoggerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoggerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should not have any message at Starting', () => {
    let count = service.messages.length;
    expect(count).toBe(0); 
  })

  it('should add the message when log is callled',()=>{
    service.logger('Sujit Kumar Verma');
    expect(service.messages.length).toBe(1);
  })

  it('should clear all the message when clear is called',()=>{
    service.clear();
    expect(service.messages.length).toBe(0);
  })

});
