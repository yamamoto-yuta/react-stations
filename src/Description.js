// DO NOT DELETE

import React, { useState, useEffect } from "react";
import { DogImage } from "./DogImage";

export function Description() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [dogUrl, setDogUrl] = useState("https://images.dog.ceo/breeds/spaniel-brittany/n02101388_6057.jpg")

  function updateDogUrl() {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setDogUrl(result.message);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }

  return (
    <div id="description">
      <div id="descriptionText">
        犬の画像を表示するサイトです。
      </div>
      <div id="dogImageView">
        <div>
          <DogImage url={dogUrl} />
        </div>
        <div id="dogImageUpdateButton">
          <button
            className="btn-flat"
            onClick={updateDogUrl}
          >更新</button>
        </div>
      </div>
    </div>
  )
}