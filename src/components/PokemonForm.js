import React, {useState} from "react";
import { Form } from "semantic-ui-react";

function PokemonForm() {
  const initialState = {
    name: "",
    hp: "",
    sprites: {
      front: "",
      back: ""
    }
  };
  const [pokeData, setPokeData] = useState(initialState)
  const API = "http://localhost:3001/pokemon";
  
  function handleSubmit() {
    fetch(API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(pokeData)
    });
  }
  function handleChange(event) {
    const { name, value } = event.target;
    setPokeData(prevData => ({
      ...prevData,
      [name]: value
    }));
  }
  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" value={pokeData.name} onChange={handleChange}/>
          <Form.Input fluid label="hp" placeholder="hp" name="hp" value={pokeData.hp} onChange={handleChange}/>
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            onChange={handleChange}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;

// - Wire up the form to add a missing Pokemon (Bulbasaur is missing, and you can
//   probably intuit the image links to use based on the data you have). Since
//   there aren't any validations, you may have to manually remove additions from
//   the `db.json` file if you make a mistake on a POST request, etc. When a new
//   Pokemon is added, it should show on the page without having to refresh.