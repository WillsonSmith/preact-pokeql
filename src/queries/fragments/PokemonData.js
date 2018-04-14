const PokemonData = `
  edges {
    node {
      englishName
      id
      height
      weight
      sprites {
        normal {
          male {
            front
          }
        }
      }
    }
  }
`;

// const FullPokemonData = `
//   edges {
//     node {
//       englishName
//       species {
//         identifier
//         evolvesFromSpecies {
//           identifier
//         }
//         evolvesIntoSpecies {
//           identifier
//         }
//       }
//       id
//       height
//       weight
//       pokemonTypes {
//         type {
//           identifier
//         }
//       }
//       sprites {
//         normal {
//           male {
//             front
//           }
//         }
//       }
//     }
//   }
// `

export default PokemonData;
