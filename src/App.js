// DO NOT DELETE

// import * as React from 'react'
import React, { useEffect, useState } from 'react';
import './App.css'



/**
 * 
 * @type {React.FC}
 */
export const App = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [dogUrl, setDogUrl] = useState("https://images.dog.ceo/breeds/spaniel-brittany/n02101388_6057.jpg")
  let newDogUrl;

  useEffect(() => {
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
        , [])
  })

  return (
    <div>
      <header>Dogアプリ</header>
      <table id="img-table" className="full-width">
        <td>
          <p>犬の画像を表示するサイトです。</p>
        </td>
        <td>
          <img id="dog-img" src={dogUrl}></img>
        </td>
      </table>
      <div id="update">
        <button className="btn-flat" onClick={() => setDogUrl(newDogUrl)}>
          更新
        </button>
      </div>

      <hr></hr>
    </div >
  )
}
