import { StrengthPipe } from './strength.pipe';

describe('StrengthPipe', () => {
  it('create an instance', () => {
    const pipe = new StrengthPipe();
    expect(pipe).toBeTruthy();
  });

  it('should display weak if 5 value is passed',()=>{
    const pipe = new StrengthPipe();
    expect(pipe.transform(5)).toEqual('Weak');
  })

  it('should display strong if 15 value is passed',()=>{
    const pipe = new StrengthPipe();
    expect(pipe.transform(15)).toEqual('Strong');
  })

  it('should display strongest if 25 value is passed',()=>{
    const pipe = new StrengthPipe();
    expect(pipe.transform(25)).toEqual('Strongest');
  })
});
