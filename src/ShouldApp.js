import React, {Component} from 'react';
import injectSheet from 'react-jss'

class CounterButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: 1};
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.color !== nextProps.color) {
      return true;
    }
    if (this.state.count !== nextState.count) {
      return true;
    }
    return false;
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
export default class ShouldApp extends Component {
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
        <h5>Using the shouldComponentUpdate method</h5>
        <button onClick={this.changeCount} >Change Count</button> 
        <button onClick={this.changeColor} >Change Color</button> 
        <div><span>Count: {this.state.count}</span></div>
        <div><span>Color: {this.state.color}</span></div>
        
        <CounterButton color={this.state.color} />
        {' '}
        <div style={{textAlign: 'left'}}>
          <p>
            This renders the color button only when 
            the color prop changes (Better) but maintaining the
            shouldComponentUpdate method should be avoided if possible.
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



