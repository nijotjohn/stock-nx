import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'graph-wc',
  styleUrl: 'graph-wc.scss',
  shadow: true,
})
export class GraphWc {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  private getText(): string {
    return (
      (this.first || '') +
      (this.middle ? ` ${this.middle}` : '') +
      (this.last ? ` ${this.last}` : '')
    );
  }

  render() {
    return <div>Hello, World! I'm {this.getText()}</div>;
  }
}
