import { FilterDataPipe } from './filter-data.pipe';

describe('FilterDataPipe', () => {

  let pipe: FilterDataPipe;

  beforeEach(() => {
    pipe = new FilterDataPipe();
  })

  it('create an instance', () => {
    const pipe = new FilterDataPipe();
    expect(pipe).toBeTruthy();
  });

  it('Providing no Value and returning null', () => {
    expect(pipe.transform('Sujit Kumar Verma', '')).toBe(null);
  })

  it('Providng Value and returning value', () => {
    expect(pipe.transform('Sujit Kumar Verma', 'Sujit')).toBe('Sujit Kumar Verma');
  })

});
