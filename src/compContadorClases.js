import React from "react";

class Contadorclase extends React.Component {
  constructor(props) {
    super(props);
    this.state = { contador: 0 };
  }
  incrementar = () => {
    this.setState({ contador: this.state.contador + 1 });
  };

  render() {
    return (
      <div>
        <h2>Contador de clase</h2>
        <p>{this.state.contador}</p>
        <button onClick={this.incrementar}>Aumentar</button>
      </div>
    );
  }
}
export default Contadorclase;
