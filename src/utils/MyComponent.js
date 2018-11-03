import React from "react";
import {withRouter} from "react-router-dom";

class MyComponent extends React.Component {
  myFunction() {
    this.props.history.push("/some/Path");
  }
}
export default withRouter(MyComponent);