import React from 'react';
class Heading extends React.Component {
  HeadingData = 'HeadingData';

  render() {
    const { title, clickHandle } = this.props;
    console.log(clickHandle);
    return (
      <h2
        onClick={(e) => {
          clickHandle(this.HeadingData);
          console.log(e);
        }}
      >
        {title}
      </h2>
    );
  }
}

export default Heading;
