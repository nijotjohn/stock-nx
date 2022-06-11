import { newSpecPage } from '@stencil/core/testing';
import { DropdownWc } from './dropdown-wc';

describe('dropdown-wc', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [DropdownWc],
      html: '<dropdown-wc></dropdown-wc>',
    });
    expect(root).toEqualHtml(`
      <dropdown-wc>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </dropdown-wc>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [DropdownWc],
      html: `<dropdown-wc first="Stencil" last="'Don't call me a framework' JS"></dropdown-wc>`,
    });
    expect(root).toEqualHtml(`
      <dropdown-wc first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </dropdown-wc>
    `);
  });
});
