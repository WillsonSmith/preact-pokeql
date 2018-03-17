import { h, render, Component } from 'preact';
import Pokemon from '../Pokemon';
import * as styles from './styles.css';

class PokemonList extends Component {
  render(props, state) {
    return (
      <div class={styles.PokemonList}>
        { props.pokemon.map((pokemon) => <Pokemon key={pokemon.node.id} pokemon={pokemon.node} />) }
      </div>
    )
  }
}

export default PokemonList;
