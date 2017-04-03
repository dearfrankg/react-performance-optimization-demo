import React, {Component} from 'react';
import injectSheet from 'react-jss'

class CounterButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: 1};
  }

  render() {
    console.log('CounterButton')
    const buttonStyle = {color: this.props.color}
    return (
      <button
        style={buttonStyle}
        onClick={() => this.setState(state => ({count: state.count + 1}))}>
        Count: {this.state.count}
      </button>
    );
  }
}

@injectSheet(styles())
export default class ComponentApp extends Component {
  state = {
    color: 'red',
    index: 0,
    count: 0
  }

  changeColor = () => {
    const colors = ['red', 'green', 'blue']
    const index = (this.state.index + 1 > 2 ) ? 0 : this.state.index + 1
    const color = colors[index]
    this.setState({
      color,
      index
    })
  }

  changeCount = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    console.log('GoodApp')
    const buttonStyle = {color: 'blue'}
    const { classes } = this.props
    return (
      <div className={classes.goodApp} >
        <h3>Using a straight React Component</h3>
        <button onClick={this.changeCount} >Change Count</button>
        <button onClick={this.changeColor} >Change Color</button>
        <div><span>Count: {this.state.count}</span></div>
        <div><span>Color: {this.state.color}</span></div>

        <CounterButton color={this.state.color} />
        {' '}
        <div style={{textAlign: 'left'}}>
          <p>
            This renders the color button everytime (hmmm).
          </p>
          <p>
            React renders into virtual-dom then determines if the
            virtual-dom matches the real DOM and only renders when
            they do not match. This is called React Reconciliation.
          </p>
        </div>

      </div>
    );
  }
}

function styles() {
  return {
    goodApp: {
      padding: 10,
      borderLeft: '1px solid green',
      borderRight: '1px solid green',
      borderBottom: '1px solid green',
      textAlign: 'center'
    }
  }
}
