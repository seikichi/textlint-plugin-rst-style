import ReSTProcessor from './ReSTProcessor';

export default {
  Processor: ReSTProcessor,
  rules: {
    'no-blank-lines-before-list-item': context => ({
      bullet_list: node => {
        const children = node.children;
        for (let i = 1; i < children.length; i++) {
          const prev = children[i - 1];
          const child = children[i];
          if (prev.children.length === 1 &&
              prev.children[0].type === 'paragraph' &&
              child.blanklines.length > 0) {
            context.report(child, new context.RuleError('no blank lines before a list item'));
          }
        }
      },
      enumerated_list: node => {
        const children = node.children;
        for (let i = 1; i < children.length; i++) {
          const prev = children[i - 1];
          const child = children[i];
          if (prev.children.length === 1 &&
              prev.children[0].type === 'paragraph' &&
              child.blanklines.length > 0) {
            context.report(child, new context.RuleError('no blank lines before a list item'));
          }
        }
      },
    }),
    'space-before-list-item-body': context => ({
      list_item: node => {
        if (node.children.length === 0) {
          return;
        }

        const child = node.children[0];
        if (child.type !== 'paragraph' || child.children.length === 0) {
          return;
        }

        const leaf = child.children[0];
        if (node.loc.start.column + 1 !== leaf.loc.start.column) {
          context.report(node, new context.RuleError('Use 1 space after list item marker.'));
        }
      },
    }),
    'blank-lines-after-section': context => ({
      section: node => {
        if (node.children.length < 2) {
          return;
        }
        var firstChild = node.children[1]; // NOTE: children[0] is title
        if (firstChild.blanklines.length > 0) {
          return;
        }
        context.report(node, new context.RuleError('blank lines after section'));
      },
    }),
    'indent-width': context => ({
      block_quote: node => {
        if (node.indent.offset === 2) {
          return;
        }
        context.report(node, new context.RuleError('Use 2 spaces per indentation level (block_quote).'));
      },
      definition_list_item: node => {
        if (node.indent.offset === 2) {
          return;
        }
        context.report(node, new context.RuleError('Use 2 spaces per indentation level (definition_list_item).'));
      },
      comment: node => {
        if (!node.indent || node.indent.offset === 3) {
          return;
        }
        context.report(node, new context.RuleError('Use 3 spaces per indentation level (comment).'));
      },
      directive: node => {
        if (!node.indent || node.indent.offset === 3) {
          return;
        }
        context.report(node, new context.RuleError('Use 3 spaces per indentation level (directive).'));
      },
    }),
  },
};
