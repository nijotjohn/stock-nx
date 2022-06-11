import { newE2EPage } from '@stencil/core/testing';

describe('dropdown-wc', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<dropdown-wc></dropdown-wc>');
    const element = await page.find('dropdown-wc');
    expect(element).toHaveClass('hydrated');
  });

  it('renders changes to the name data', async () => {
    const page = await newE2EPage();

    await page.setContent('<dropdown-wc></dropdown-wc>');
    const component = await page.find('dropdown-wc');
    const element = await page.find('dropdown-wc >>> div');
    expect(element.textContent).toEqual(`Hello, World! I'm `);

    component.setProperty('first', 'James');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm James`);

    component.setProperty('last', 'Quincy');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm James Quincy`);

    component.setProperty('middle', 'Earl');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm James Earl Quincy`);
  });
});