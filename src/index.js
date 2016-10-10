import ReSTProcessor from './ReSTProcessor';

export default {
  Processor: ReSTProcessor,
  rules: {
    'no-empty-section': context => ({
      section: node => {
        if (node.children.length <= 1) {
          context.report(node, new context.RuleError('empty section'));
        }
      },
    }),
  },
};
