import React from 'react'
import injectSheet from 'react-jss'

class ListOfWords extends React.PureComponent {
  render() {
    return <div>{this.props.words.join(',')}</div>;
  }
}

@injectSheet(styles())
export default class WordAdder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      words: ['ping']
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const words = this.state.words;
    words.push('ping');
    this.setState({words: [...words]});
  }

  render() {
    const { classes } = this.props
    return (
      <div className={classes.goodApp} >
        <h5>Using React.PureComponent without Mutating</h5>
        <button onClick={this.handleClick} >Add Word</button>
        <h6>Word List</h6>
        <ListOfWords words={this.state.words} />
        {' '}
        <div style={{textAlign: 'left'}}>
          <p>
            The add-button adds a word to the list by creating 
            a new array using [...words, newWord].  React.PureComponent
            uses a shallow-compare to check props. It sees the 
            oldWordList and the newWordList as different because they
            have different array refs.
          </p>
          <p>
            The result is that the updated word list does render.(good)
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



