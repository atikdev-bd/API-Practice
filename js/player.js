const playerApi = (search) => {
    const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${search}`
    fetch(url)
        .then(res => res.json())
        .then(data => dispayPlayers(data.player))

};

const dispayPlayers = (players) => {
    const divPlayer = document.getElementById('meals-container')
    divPlayer.innerHTML=""
    players.forEach(player => {
        const {strCutout,strNationality,strPlayer} = player
        const div = document.createElement('div');
        div.classList.add('col')
        div.innerHTML = `
        <div class="card">
             <img src="${strCutout}" class="card-img-top" alt="...">
             <div class="card-body">
             <h5 class="card-title">Pleyer Name : ${strPlayer}</h5>
             <p class="card-text">Nationality : ${strNationality} </p>
             <button class="btn btn-info">details</button>
         </div>
       </div>
        `;
        divPlayer.appendChild(div);

    })
}

const selectPlayer = ()=>{
 const searchValue = document.getElementById("scrach-input");
 const searchValueText = searchValue.value;
 playerApi(searchValueText);
 searchValue.value =''
}
playerApi()