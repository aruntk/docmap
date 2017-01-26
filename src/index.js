import { parse } from 'babylon';

function docMap(js) {
  const ast = parse(js);
  const comments = ast.comments || [];
  return comments.map(function(c) {
    return c ? c.value : '';
  }).join('\n');
}

export default docMap;
