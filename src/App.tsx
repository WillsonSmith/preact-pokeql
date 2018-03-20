import { h, render, Component } from 'preact';

import PokemonList from './Components/PokemonList';
import PokemonData from './queries/fragments/PokemonData';
import * as styles from './App.css';

const pokemonDataToRequest = PokemonData;

async function request(query) {
  const url = 'https://pokeql.com/v1';
  const data = new FormData();
  data.append('query', query);
  const response = await fetch(url, {
    method: 'POST',
    body: data,
  });
  return response.json();
}

async function queryPokemon(name) {
  const query = `
    {
      Pokemon (filter:{identifierLike:"${name.toLowerCase()}"}) {
        ${pokemonDataToRequest}
      }
    }
  `
  const responseJson = await request(query);
  return responseJson.data.Pokemon.edges;
}
async function queryAllPokemon() {
  const query = `
    {
      Pokemon {
        ${pokemonDataToRequest}
      }
    }
  `;
  const responseJson = await request(query);
  const pokemon = responseJson.data.Pokemon.edges;
  return pokemon;
}

class App extends Component {

  constructor() {
    super();
    this.state.searchQuery = '';
    this.state.pokemon = [];

    this.search = this.search.bind(this);
    this.updateQueryString = this.updateQueryString.bind(this);
  }

  search(evt) {
    evt.preventDefault();
    this.fetchPokemon(this.state.searchQuery);
  }

  updateQueryString(evt) {
    this.setState({searchQuery: evt.target.value});
  }

  async fetchPokemon(name :? string) {
    const pokemon = name ? await queryPokemon(name) : await queryAllPokemon();
    this.setState({pokemon});
  }

  render(props, state) {
    return (
      <div class={styles.App}>
        <form class={styles.SearchForm} onSubmit={this.search}>
          <label class={styles.SearchLabel} for="searchInput">Find a Pokémon</label>
          <div class={styles.SearchWrapper}>
            <input
              class={styles.SearchField}
              type="text"
              id="searchInput"
              placeholder="bulbasaur"
              onChange={this.updateQueryString} />
            <button class={styles.SearchButton} type="submit">Search</button>
          </div>
        </form>
        <PokemonList pokemon={state.pokemon} />
      </div>
    )
  }
}

export default App;
