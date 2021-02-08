import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toys, onDel, onUpdate}) {
  const toyArr = toys.map((toy) => {
    return <ToyCard key={toy.id} toy={toy} onDel={onDel} onUpdate={onUpdate} />
  })
  return (
    <div id="toy-collection">{toyArr}</div>
  );
}

export default ToyContainer;
