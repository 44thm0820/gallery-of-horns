import React from 'react';

class HornedBeast extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      votes: 0,
    }
  }

  handleVote = () => {
    this.setState({
      votes: this.state.votes + 1,
    });
  }

  render() {
    return(
      <article>
        <h2 >{this.props.title}</h2>
        <p>❤️&nbsp;&nbsp;{this.state.votes}</p>
        <img
          onClick={this.handleVote}
          src={this.props.image_url}
          alt={this.props.description}
          title={this.props.title}
        />
        <p>{this.props.description}</p>
      </article>
    )
  }
}

export default HornedBeast;