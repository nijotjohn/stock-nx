import { newSpecPage } from '@stencil/core/testing';
import { GraphWc } from './graph-wc';

describe('graph-wc', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [GraphWc],
      html: '<graph-wc></graph-wc>',
    });
    expect(root).toEqualHtml(`
      <graph-wc>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </graph-wc>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [GraphWc],
      html: `<graph-wc first="Stencil" last="'Don't call me a framework' JS"></graph-wc>`,
    });
    expect(root).toEqualHtml(`
      <graph-wc first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </graph-wc>
    `);
  });
});
