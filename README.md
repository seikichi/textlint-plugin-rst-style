# textlint-plugin-rst-style

Note: This project is still in progress...

Add reStructuredText style check support for [textlint](https://github.com/textlint/textlint).
This plugin only focuses on conding style like [markdownlint](https://github.com/mivok/markdownlint).

## Installation

```sh
> npm install textlint-plugin-rst-style
```

## Usage

Manually add text plugin to do following:

```json
{
  "plugins": [
    "rst-style"
  ]
}
```

Lint ReST file with textlint

```
> cat <<EOF > index.rst
Title
=====

Hello, world!

* item 1

* item 2
EOF
> textlint index.rst
T.B.D.
```

## Tests

```sh
> npm test
```

## License

MIT
