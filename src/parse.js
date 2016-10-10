import StructuredSource from 'structured-source';
import _ from 'lodash';
import map from 'unist-util-map';
import restructured from 'restructured';

export default function parse(rst) {
  const ast = restructured.parse(rst, { position: true });
  const src = new StructuredSource(rst);

  return map(ast, node => {
    const { start, end } = node.position;

    const loc = {
      start: { line: start.line, column: start.column - 1 },
      end: { line: end.line, column: end.column - 1 },
    };
    const range = src.locationToRange(node.position);
    const raw = rst.slice(range[0], range[1]);

    return Object.assign({ }, _.omit(node, 'position'), { loc, range, raw });
  });
}
