import parse from './parse';

export default class ReSTProcessor {
  constructor(config) {
    this.config = config;
  }

  static availableExtensions() {
    return [
      '.rst',
      '.rest',
    ];
  }

  processor(_ext) {
    return {
      preProcess(text, _filePath) {
        return parse(text);
      },
      postProcess(messages, filePath) {
        return {
          messages,
          filePath: filePath || '<rst>',
        };
      },
    };
  }
}
