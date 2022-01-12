import React from 'react';
import Card from 'react-bootstrap/Card';
import './HornedBeast.css';

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
      <Card style={{width: '40%'}}>
        <Card.Body>
          <article>
            <Card.Title><h2>{this.props.title}</h2></Card.Title>
            <Card.Text>❤️&nbsp;&nbsp;{this.state.votes}</Card.Text>
            <Card.Img 
              onClick={this.handleVote}
              src={this.props.image_url}
              alt={this.props.description}
              title={this.props.title}
            />
            <Card.Text><p>{this.props.description}</p></Card.Text>
          </article>
        </Card.Body>
      </Card>
    )
  }
}

export default HornedBeast;

// render() {
//   return(
//     <article>
//       <h2 >{this.props.title}</h2>
//       <p>❤️&nbsp;&nbsp;{this.state.votes}</p>
//       <img
//         onClick={this.handleVote}
//         src={this.props.image_url}
//         alt={this.props.description}
//         title={this.props.title}
//       />
//       <p>{this.props.description}</p>
//     </article>
//   )
// }