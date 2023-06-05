import React from "react";
import { Card } from "react-bootstrap";

export default class API extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // pokemon: [],
      countries: [],
    };
  }

  componentDidMount() {
    console.log("running");
    // fetch("https://pokeapi.co/api/v2/pokemon/snorlax")
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log(data);
    //     this.setState({ pokemon: [data] });
    //   });

    fetch("https://restcountries.com/v3.1/region/europe")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.setState({ countries: data });
      });
  }

  render() {
    return (
      <div className="flex">
        {this.state.countries && this.state.countries.length > 0 ? (
          this.state.countries.map((country, index) => (
            <Card
              bg={"secondary"}
              key={`${country.fifa}-${index}`}
              style={{ width: "18rem" }}
            >
              <Card.Img variant="top" src={country.coatOfArms.png} />
              <Card.Body>
                <Card.Title>{country.name.official}</Card.Title>
                <Card.Text>Population: {country.population}</Card.Text>
              </Card.Body>
            </Card>
          ))
        ) : (
          <p>No countries</p>
        )}

        {/* {this.state.pokemon && this.state.pokemon.length > 0 ? (
          this.state.pokemon.map((unit) => (
            <div>
              <p>{unit.name}</p>
              <p>{unit.weight}</p>
              <img src={unit.sprites.front_default} alt={unit.name} />
            </div>
          ))
        ) : (
          <p>No pokemon</p>
        )} */}
      </div>
    );
  }
}
