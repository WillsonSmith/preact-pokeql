import {h, render, Component} from 'preact';
import * as styles from './styles.css';

interface Props {
  pokemon: any
}

interface Species {
  evolvesFromSpecies: {};
  evolvesIntoSpecies: any;
  identifier: string;
}

class Pokemon extends Component {
  pokemon: any;

  constructor(props) {
    super(props);
    const { id, height, weight, pokemonTypes, species, sprites, englishName } = props.pokemon;
    this.pokemon = {
      id, height, weight, pokemonTypes, species, sprites, englishName,
    }
  }

  get species() {
    return this.pokemon.species;
  }

  render(props, state) {
    return (
      <div class={styles.Pokemon}>
        <div>
          <img src={this.pokemon.sprites.normal.male.front} />
        </div>
        <div class={styles.PokemonDescription}>
          <dl class={styles.PokemonDescription}>
            <div class={styles.PokemonDescriptionRow}>
              <dt>Name</dt>
              <dd>{this.pokemon.englishName || this.species.identifier}</dd>
            </div>
            <div class={styles.PokemonDescriptionRow}>
              <dt>Height</dt>
              <dd>{this.pokemon.height}</dd>
            </div>
            <div class={styles.PokemonDescriptionRow}>
              <dt>Weight</dt>
              <dd>{this.pokemon.weight}</dd>
            </div>
          </dl>
        </div>
      </div>
    )
  }
}

export default Pokemon;
