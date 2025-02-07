import React, { Component } from 'react';

import { EuiPopover, EuiButton } from '../../../../src/components';

export default class extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isPopoverOpen: false,
    };
  }

  onButtonClick() {
    this.setState({
      isPopoverOpen: !this.state.isPopoverOpen,
    });
  }

  closePopover() {
    this.setState({
      isPopoverOpen: false,
    });
  }

  render() {
    const button = (
      <EuiButton
        iconType="arrowDown"
        iconSide="right"
        onClick={this.onButtonClick.bind(this)}>
        Show popover
      </EuiButton>
    );

    return (
      <EuiPopover
        button={button}
        isOpen={this.state.isPopoverOpen}
        closePopover={this.closePopover.bind(this)}>
        <div style={{ width: '300px' }}>
          Popover content that&rsquo;s wider than the default width
        </div>
      </EuiPopover>
    );
  }
}
