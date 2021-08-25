import * as fromMainActions from './main-actions.actions';

describe('loadMainActionss', () => {
  it('should return an action', () => {
    expect(fromMainActions.loadMainActionss().type).toBe('[MainActions] Load MainActionss');
  });
});
