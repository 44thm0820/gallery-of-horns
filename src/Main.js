import React from 'react';
import HornedBeast from './HornedBeast.js';
import './Main.css'


class Main extends React.Component {
  render() {

    let beastsArray = this.props.data.map( (beast, index) => 
      <HornedBeast
        key={'main'+index}
        image_url={beast.image_url}
        title={beast.title}
        description={beast.description}
      />
    );

    return(
      <main>
        {beastsArray}
      </main>
    );
  }
}

export default Main;