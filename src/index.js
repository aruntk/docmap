import { parse } from 'espree';

export const parserOptions = {
    comment: true,
    ecmaFeatures: {
        experimentalObjectRestSpread: true,
        globalReturn: true,
        impliedStrict: true,
        jsx: true
    },
    ecmaVersion: 7,
    loc: true,
    range: true,
    sourceType: 'module',
    tokens: true
};

export default function docMap(source, filename) {
    let ast;

    try {
        ast = parse(source, parserOptions);
    }
    catch (e) {
        console.error('Unable to parse %s: %s', filename, e.message);
    }

    return ast;
}
