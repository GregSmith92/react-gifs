import React, { Component } from 'react';
import SearchBar from './search_bar.jsx';
import Gif from './gif.jsx';
import giphy from 'giphy-api';
import GifList from './gif_list.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: [],
      selecedGifId: "bwnzbsw3YwRs4"
    }
    this.search("sports");
  }

  search = (query) => {
    giphy('1eElEjVoQS0dkjBo4ktNNAI6gNAoW8c8').search({
      q: query,
      rating: 'g'
    }, (error, result) => {
      this.setState({
        gifs: result.data
      });
    });
  }

  render() {
    const gifs = [
      { id: "3otPorZ08nPuaZfoeA" },
      { id: "3o7TKIVhjUEcYbJCUg" }
    ]
    return (
      <div>
        <div className="left-scene">
          <SearchBar />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} />
        </div>
      </div>
    );
  }
}

export default App;
