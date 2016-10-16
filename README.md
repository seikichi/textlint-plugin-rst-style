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
$ cat <<EOF > index.rst
Title
=====
Hello, world!

- item 1

- item 2

.. code-block:: javascript

    console.lor('Hello, world!')
EOF
$ textlint index.rst

/Users/seikichi/src/tmp/rstlint/index.rst
  1:1  error  blank lines after section                       rst-style/blank-lines-after-section
  7:2  error  no blank lines before a list item               rst-style/no-blank-lines-before-list-item
  9:1  error  Use 3 spaces per indentation level (directive)  rst-style/indent-width

✖ 3 problems (3 errors, 0 warnings)
```

## Tests

```sh
> npm test
```

## License

MIT
