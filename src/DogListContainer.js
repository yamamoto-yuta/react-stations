// DO NOT DELETE

import React, { useEffect, useState } from "react";
import { BreedsSelect } from "./BreedsSelect";

const MAX_DOG_IMAGE_COUNT = 12;

export function DogListContainer() {
  const [error, setError] = useState(null);
  const [isBreedsLoaded, setIsBreedsLoaded] = useState(false);
  const [breeds, setBreeds] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState("");
  const [isSelectedBreedImagesLoaded, setIsSelectedBreedImagesLoaded] = useState(false);
  const [selectedBreedImages, setSelectedBreedImages] = useState([]);

  useEffect(() => {
    setIsBreedsLoaded(false);
    fetch("https://dog.ceo/api/breeds/list/all")
      .then(response => response.json())
      .then(
        data => {
          setIsBreedsLoaded(true);
          setBreeds(data.message);
          // 初期選択データとして先頭のデータをset
          setSelectedBreed(Object.entries(data.message)[0][0]);
        },
        error => {
          setIsBreedsLoaded(true);
          setError(error);
        }
      );
  }, []);

  function getSelectedDogImageList() {
    setSelectedBreedImages(false);
    fetch(`https://dog.ceo/api/breed/${selectedBreed}/images/random/${MAX_DOG_IMAGE_COUNT}`)
      .then(response => response.json())
      .then(
        (data) => {
          setIsBreedsLoaded(true);
          setSelectedBreedImages(data.message);
          console.log(data.message);
        },
        (error) => {
          setIsBreedsLoaded(true);
          setError(error);
        }
      );
  }

  return (
    <div>
      {isBreedsLoaded && (

        <div>
          Breeds List
          <BreedsSelect
            breeds={breeds}
            selectedBreed={selectedBreed}
            setSelectedBreed={setSelectedBreed}
          />
          <button
            className="btn-flat"
            onClick={getSelectedDogImageList}
          >表示</button>
        </div>
      )}
      {selectedBreedImages && (
        <div>
          {selectedBreedImages.map(item => (
            <img className="img-trimed" src={item} />
          ))}
        </div>
      )}
    </div>
  );
}