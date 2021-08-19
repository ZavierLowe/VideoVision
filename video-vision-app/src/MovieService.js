const url = "https://api.themoviedb.org/3"

  fetch(
    `${url}/search/movie?query=${search}&api_key=21ccc4f54140dad5f660e669a552127d`
  )
  .then((res) => res.json())
  .catch((_) =>{
    return[]
  });