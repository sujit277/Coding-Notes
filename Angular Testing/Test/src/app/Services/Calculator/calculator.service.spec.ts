import { TestBed } from '@angular/core/testing';
import { LoggerService } from '../Logger/logger.service';

import { CalculatorService } from './calculator.service';

describe('CalculatorService', () => {
  let mockLoggerService: any;
  let calculator: CalculatorService;
  beforeEach(() => {
    mockLoggerService = jasmine.createSpyObj('LoggerService', ['logger']);
    TestBed.configureTestingModule({
      providers: [CalculatorService, {
        provide: LoggerService,
        useValue: mockLoggerService
      }]
    });
    calculator = TestBed.inject(CalculatorService);
  });

  it('should be created', () => {
    expect(calculator).toBeTruthy();
  });

  it('should add two numbers', () => {
    let result = calculator.add(2, 2);
    expect(result).toBe(4);
    expect(mockLoggerService.logger).toHaveBeenCalledTimes(1);
  })

  it('should substract two numbers', () => {
    let result = calculator.subtract(2, 2);
    expect(result).toBe(0);
    expect(mockLoggerService.logger).toHaveBeenCalledTimes(1);
  })

});
