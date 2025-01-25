# Pokedex Exercise

We want to help the next generation of Pokémon trainers become masters. So we’ll be building
a Pokedex for them that does the following at minimum:

1. Display a Paginated List of Pokémon that displays the:
   - [x] 1.1. Name
   - [x] 1.2. Index (or ID)
   - [x] 1.3. Pagination Controls: Show a way to go to next/previous pages or otherwise load more Pokémon.
2. Detailed Pokémon View:
   - [x] 2.1. On click or selection of a Pokémon from the list, show a details screen/modal/page that contains:
   - [x] 2.2. Name
   - [x] 2.3. Height + Weight
   - [x] 2.4. Abilities / Moves
   - [x] 2.5. Stats
   - [x] 2.6. Image of the Pokémon
   - [x] 2.7. Type(s)
   - [x] 2.8. Weaknesses based on their type
   - [x] 2.9. Link to any evolutions if applicable
     - not "linked" in initial demo; as I have not routing to link _to_ a specific pokemon at this time
3. Search by Name:
   - [x] 3.1. Allow searching for a Pokémon by its name (e.g., “pikachu”).
     - Searches over all fetched pokemon, not just the current page
4. Filter by Type:
   - [x] 4.1. Provide a way to filter the list by one or multiple types (e.g., Water, Fire)

### Requirements & Clarifications

* Don’t aim for pixel-perfect styling over functionality, correctness, and code quality

- [x] TS + React
- [x] Use the [PokéAPI](https://pokeapi.co/) to fetch Pokémon data
- [x] Use any libraries/packages you like
  - [x] Project bootstrapped with `vite create react-ts`
- [x] Architecture:
  - [x] Show dirs