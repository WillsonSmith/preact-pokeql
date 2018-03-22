import {h, render, Component} from 'preact';
import * as styles from './styles.css';


class Pokemon extends Component<any, null> {
  pokemon: any;

  constructor(props) {
    super(props);
  }

  render(props) {
    return (
      <div class={styles.Pokemon}>
        <div>
          <img src={props.pokemon.sprites.normal.male.front} width="96" />
        </div>
        <div class={styles.PokemonDescription}>
          <dl class={styles.PokemonDescription}>
            <div class={styles.PokemonDescriptionRow}>
              <dt>Name</dt>
              <dd>{props.pokemon.englishName}</dd>
            </div>
            <div class={styles.PokemonDescriptionRow}>
              <dt>Height</dt>
              <dd>{props.pokemon.height} m</dd>
            </div>
            <div class={styles.PokemonDescriptionRow}>
              <dt>Weight</dt>
              <dd>{props.pokemon.weight} kg</dd>
            </div>
          </dl>
        </div>
      </div>
    )
  }
}

export default Pokemon;
