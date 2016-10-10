import fs from 'fs';
import path from 'path';
import { test } from 'textlint-ast-test';
import parse from '../src/parse';

describe('parse test', () => {
  it('should return AST that passed isTxtAST', () => {
    const fixture = fs.readFileSync(path.join(__dirname, 'fixtures/test.rst'), 'utf-8');
    const AST = parse(fixture);
    test(AST);
  });
});
