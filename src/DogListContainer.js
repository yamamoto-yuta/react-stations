// DO NOT DELETE

import React, { useEffect, useState } from "react";
import { BreedsSelect } from "./BreedsSelect";

export function DogListContainer() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [breeds, setBreeds] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState("");

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/list/all")
      .then(response => response.json())
      .then(
        data => {
          setIsLoaded(true);
          setBreeds(data.message);
        },
        error => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  return (
    <div>
      Breeds List {isLoaded && (
        <BreedsSelect
          breeds={breeds}
          selectedBreed={selectedBreed}
          setSelectedBreed={setSelectedBreed}
        />
      )}
    </div>
  );
}