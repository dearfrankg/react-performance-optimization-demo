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
    // This section is bad style and causes a bug
    const words = this.state.words;
    words.push('ping');
    this.setState({words: words});
  }

  render() {
    const { classes } = this.props
    return (
      <div className={classes.goodApp} >
        <h5>Gotcha using React.PureComponent</h5>
        <button onClick={this.handleClick} >Add Word via Mutation </button>
        <h6>Word List</h6>
        <ListOfWords words={this.state.words} />
        {' '}
        <div style={{textAlign: 'left'}}>
          <p>
            The add-button adds a word to the list via Mutation
            using `words.push(newWord)`.  React.PureComponent
            uses a shallow-compare to check props. It sees the 
            oldWordList and the newWordList as equal because the have 
            the same array ref.
          </p>
          <p>
            The result is that the updated word list does not render.(bad)
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



