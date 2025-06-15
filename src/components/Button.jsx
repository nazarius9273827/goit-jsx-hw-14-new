import React from 'react';

class Button extends React.Component {
  render() {
    return (
      <div className="button-wrapper">
        <button type="button" className="load-more-button" onClick={this.props.onClick}>
          Load more
        </button>
      </div>
    );
  }
}

export default Button;
