import assert from 'assert';
import docMap from '..';

describe('basics', function () {
  it('returns comments', function () {
    const commentsAST = docMap('var x = 42; // answer');
    const comments = commentsAST.map(function(c) {
      return c ? c.value : '';
    }).join('\n');
    assert.equal('answer', comments.trim());
  });
});


