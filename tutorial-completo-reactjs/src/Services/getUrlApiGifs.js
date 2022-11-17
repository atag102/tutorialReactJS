const apiKey="ZOBZSjNlZ48pIN1rpH4uklJgKgMz3G0Q";

export default function getGifs(keywoard){
    const apiURL=`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keywoard}&limit=10&offset=0&rating=g&lang=en`;

    return fetch(apiURL).
    then((res)=> res.json())
    .then(response=>{
      const {data}=response;
      const gifs=data.map(image=>
        {
            const {images,title,id}=image
            const {url}=image.images.downsized_medium
            return{title,id,url}
    }
      )
      return gifs     
    })
}