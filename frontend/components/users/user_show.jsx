import React from 'react';

class UserShow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="user_show_container">
        Show Page for {this.props.userId}
      </div>
    );
  }
}

export default UserShow;
