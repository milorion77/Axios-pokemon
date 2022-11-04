import React from "react";
import AxiosPokemon from "./componentes/axiosPokemon/axiosPokemon";


class App extends React.Component {

  render() {
    return (
      <div className="container">
        <AxiosPokemon />
      </div>
    )
  }

}

export default App;