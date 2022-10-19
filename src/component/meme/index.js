import React, { useEffect, useState } from "react";
import Image from "../image";
import "./styles.css";

export default function Meme() {
  const [data, setData] = useState([]);
  const [displayImage, setDisplayImage]=useState([])

  const getData = async () => {
    const promise = await fetch("https://api.imgflip.com/get_memes");
    const res = await promise.json();
    const newData = res?.data?.memes || [];
    setData([...data, ...newData]);
  };
  const loadMore=()=>{
    if (data.length > 10)
    { 
        setData(data.splice(10, data.length));
        const image = data.slice(0, 10);
        setDisplayImage([...displayImage, ...image]);
    }
  }
  const ListMemeImage=() => {
    return (
        displayImage.map((image) => (
        <Image {...image} />
        ))
    )
  }

  useEffect(() => {
    if (!data.length) {
        getData();
        loadMore();
    }
  });


  return (
    <div>
        <dev class="title">MEME LIST</dev>
        <br></br>
        <button class="button" onClick={() => loadMore()}>Load More</button>
        <div class="image-grid">
            {ListMemeImage()}

        </div>
    </div>
  );
}