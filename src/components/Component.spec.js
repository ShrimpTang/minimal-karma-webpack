
import {Component} from './Component';


describe('Component', () => {

  it('should be defined', () => {
    expect(Component).toBeDefined();
  });

  it('should multiply', () => {
    // given
    const c = new Component(5);

    // when
    const result = c.multiply(10);

    // then
    expect(result).toEqual(50);
  });

});
