import { parse } from 'babylon';

function docMap(js) {
  const ast = parse(js);
  return ast.comments;
}

export default docMap;
