const marvel = {
  render: () => {
    const urlAPI =
      "http://gateway.marvel.com/v1/public/characters?ts=1&apikey=7fa6295a3dc1ff9572b835758aa02149&hash=a4c04e8b1ff88e54d74141fe18532d5f";
    const container = document.querySelector("#marvel-row");
    let contentHTML = "";

    fetch(urlAPI)
      .then((res) => res.json())
      .then((json) => {
        console.log(json, "RES.JSON");
        for (const hero of json.data.results) {
          let urlHero = hero.urls[0].url;
          contentHTML += ` <div class="gird-colum" onclick="getHero(event)" id=${hero.id} >
                               <a href="#" target="_blank" >
                                  <img src="${hero.thumbnail.path}.${hero.thumbnail.extension}" alt="${hero.name}" class="img-thumbnail" />
                               </a>
                              
                               <h3 class="title">${hero.name}</h3>
                                <p>${hero.description}</p>
                               <p>${hero.id}</p>
 
                              
                               <span>${hero.modified}</span>

                                
                             </div>`;
        }
        container.innerHTML = contentHTML;
      });
  },
};
marvel.render();

async function getHero(event) {
  console.log(event);
  event.preventDefault();

  console.log(event.currentTarget.id);

  location.replace(
    "http://127.0.0.1:5500/details.html?id=" + event.currentTarget.id
  );
}
