# Pokedex Exercise

We want to help the next generation of Pokémon trainers become masters. So we’ll be building
a Pokedex for them that does the following at minimum:

1. Display a Paginated List of Pokémon that displays the:
   - [x] 1.1. Name
   - [x] 1.2. Index (or ID)
   - [ ] 1.3. Pagination Controls: Show a way to go to next/previous pages or otherwise load more Pokémon.
2. Detailed Pokémon View:
   - [ ] 2.1. On click or selection of a Pokémon from the list, show a details screen/modal/page that contains:
   - [ ] 2.2. Name
   - [ ] 2.3. Height + Weight
   - [ ] 2.4. Abilities / Moves
   - [ ] 2.5. Stats
   - [ ] 2.6. Image of the Pokémon
   - [ ] 2.7. Type(s)
   - [ ] 2.8. Weaknesses based on their type
   - [ ] 2.9. Link to any evolutions if applicable
3. Search by Name:
   - [ ] 3.1. Allow searching for a Pokémon by its name (e.g., “pikachu”).
4. Filter by Type:
   - [ ] 4.1. Provide a way to filter the list by one or multiple types (e.g., Water, Fire)

### Requirements & Clarifications

* Don’t aim for pixel-perfect styling over functionality, correctness, and code quality

- [x] TS + React
- [x] Use the [PokéAPI](https://pokeapi.co/) to fetch Pokémon data
- [x] Use any libraries/packages you like
  - [x] Project bootstrapped with `vite create react-ts`
- [x] Architecture:
  - [x] Show dirs