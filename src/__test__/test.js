import assert from 'assert';
import docMap from '..';

describe('basics', function () {
  it('returns comments', function () {
    const comments = docMap('var x = 42; // answer');
    assert.equal('answer', comments.trim());
  });
});


