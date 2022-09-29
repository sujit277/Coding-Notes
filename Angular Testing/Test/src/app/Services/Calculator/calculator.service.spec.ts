import { TestBed } from '@angular/core/testing';
import { LoggerService } from '../Logger/logger.service';

import { CalculatorService } from './calculator.service';

describe('CalculatorService', () => {
  let service: CalculatorService;
  let mockLoggerService: any;
  let calculator: CalculatorService;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add two numbers', () => {
    let mockLoggerService = jasmine.createSpyObj('LoggerService', ['logger']);
    calculator = new CalculatorService(mockLoggerService);
    let result = calculator.add(2, 2);
    expect(result).toBe(4);
    expect(mockLoggerService.logger).toHaveBeenCalledTimes(1);
  })

  it('should substract two numbers', () => {
    let mockLoggerService = jasmine.createSpyObj('LoggerService', ['logger']);
    calculator = new CalculatorService(mockLoggerService);
    let result = calculator.subtract(2, 2);
    expect(result).toBe(0);
    expect(mockLoggerService.logger).toHaveBeenCalledTimes(1);
  })

});
