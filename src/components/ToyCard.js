import React from "react";

function ToyCard({toy, onDel, onUpdate}) {

  function handleDel(){
    fetch(`http://localhost:3001/toys/${toy.id}`,{
      method: 'DELETE',
    })
    onDel(toy.id)
  }

  function handleUpdate(){
    fetch(`http://localhost:3001/toys/${toy.id}`,{
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({...toy, likes: toy.likes + 1})
    })
    .then(r => r.json())
    .then(updatedToy => {
      onUpdate(updatedToy)
    })
  }

  return (
    <div className="card">
      <h2>{toy.name}</h2>
      <img
        src={toy.image}
        alt={toy.name}
        className="toy-avatar"
      />
      <p>{toy.likes} Likes </p>
      <button onClick={handleUpdate} className="like-btn">Like {"<3"}</button>
      <button onClick={handleDel} className="del-btn">Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard; 
