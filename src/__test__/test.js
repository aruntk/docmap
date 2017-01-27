import assert from 'assert';
import docMap from '..';

describe('basics', function () {
  it('returns comments', function () {
    const ast = docMap('var x = 42; // answer');
    const comments = ast.comments.map(function(c) {
      return c ? c.value : '';
    }).join('\n');
    assert.equal('answer', comments.trim());
  });
});


