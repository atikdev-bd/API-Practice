const bidesiUser = () => {
    fetch('https://randomuser.me/api/?results=50')
        .then(res => res.json())
        .then(data => displayUser(data.results))    
}


const displayUser = users => {
    const display = document.getElementById('user-container')
    for (const user of users) {
        const div = document.createElement('div');
        div.classList.add('userId')
        div.innerHTML = `
          <h4>Name : ${user.name.title} ${user.name.first} ${user.name.last}</h4>
           <p>Location : ${user.location.city}</p>
           <p>Number : ${user.location.street.number}</p>
        `;
        display.appendChild(div)
        
    
    }

}