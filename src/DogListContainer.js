// DO NOT DELETE

import React, { useEffect, useState } from "react";

export function DogListContainer() {
  const [breeds, setBreeds] = useState([]);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/list/all")
      .then(response => response.json())
      .then(data => {
        setBreeds(data.message);
      });
  }, []);

  return <div></div>
}