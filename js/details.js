document.addEventListener("DOMContentLoaded", async (event) => {
  const queryString = document.location.search;

  console.log(queryString);
  // ?id=1010699
  const value = GetQueryVariable(location.search, "id");

  //1010699

  console.log(value);

  const response = await fetch(
    "http://gateway.marvel.com/v1/public/characters?ts=1&apikey=7fa6295a3dc1ff9572b835758aa02149&hash=a4c04e8b1ff88e54d74141fe18532d5f&id="
  );

  const result = await response.json();
  console.log(result);
  const hero = result.data.results[0];
  const { name, description, id } = hero;

  document.title = name;

  const h1 = document.createElement("h1");
  h1.innerHTML = name;
  document.getElementById("main").appendChild(h1);

  const descriptionElement = document.createElement("p");
  descriptionElement.innerHTML = description;
  document.getElementById("description").appendChild(descriptionElement);

  const heroId = document.createElement("p");
  heroId.innerHTML = `ID: ${id}`;
  document.getElementById("heroId").appendChild(heroId);
});

// parses  query string provided and returns the value
function GetQueryVariable(query, name) {
  if (query.indexOf("?") == 0) {
    query = query.substr(1);
  }
  var pairs = query.split("&");
  for (var i = 0; i < pairs.length; i++) {
    var pair = pairs[i].split("=");
    if (pair[0] == name) {
      return pair[1];
    }
  }
  return "";
}
