import React, { memo } from "react";

class InputChild extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log("ffkfm");
    return (
      <div>
        <h2>I am Memo child</h2>
      </div>
    );
  }
}

export default memo(InputChild);
// export default InputChild;
