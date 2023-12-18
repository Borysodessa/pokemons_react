import { Provider } from "react-redux";
import { store } from "./components/store";
import { PokemonsList } from "./components/PokemonsList";

export function App() {
  return (
    <Provider store={store}>
      <PokemonsList />
    </Provider>
  );
}
