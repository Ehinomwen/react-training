
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { change: true };
  }

  render() {
    return (
      <div>
        <div className='demo'
          onMouseOver={() => {
            this.setState({ change: !this.state.change }); 
          }}
        >
        {this.state.change ? (
          <h1>Welcome to GeeksforGeeks</h1>
        ) : (
          <h1>A Computer Science Portal for Geeks</h1>
        )}

        </div>
              </div>
    );
  }
}

export default App;


