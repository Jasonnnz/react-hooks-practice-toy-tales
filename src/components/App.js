import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [ toys, setToys ] = useState([])
  const [showForm, setShowForm] = useState(false);
  
  useEffect(() => {
    fetch('http://localhost:3001/toys')
    .then(r => r.json())
    .then(toys => {
      setToys(toys)
    })
  },[])

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function onSubmit(newToy){
    setToys([...toys, newToy])
  }

  function onDel(id){
    const newArr = toys.filter((toy) => {
      return toy.id !== id
    })
    setToys(newArr)
  }

  function onUpdate(updatedToy){
    const newArr = toys.map((t) => {
      if(t.id === updatedToy.id){
        return updatedToy
      }
      return t
    })
    setToys(newArr)
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm onSubmit={onSubmit}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} onDel={onDel} onUpdate={onUpdate} />
    </>
  );
}

export default App;
