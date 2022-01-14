import React from 'react';
import HornedBeast from './HornedBeast.js';
import './Main.css';


class Main extends React.Component {
  render() {

    let beastsArray = this.props.data.map( (beast, index) => {
      return <HornedBeast
        key={'main'+index}
        image_url={beast.image_url}
        title={beast.title}
        description={beast.description}
      />
    });

    return(
      <main>
        <form onSubmit={this.handleSubmit}>
          <fieldset>
            <legend>Ponderings</legend>

            <label>Name
              <input name="name" onInput={this.handleName}/>
            </label>

            <label htmlFor="word">Word</label>
            <input name="word" id="word" onChange={this.handleWord} />

            <label htmlFor="selected">Make A Choice</label>
            <select name="selected" id="selected" onChange={this.handleNumbers}>
              <option value="all">All</option>                
              <option value="odd">Odd</option>
              <option value="even">Even</option>
            </select>

            <button type="submit">Submit</button>
          
          </fieldset>

        </form>
        {beastsArray}
      </main>
    );
  }
}

export default Main;