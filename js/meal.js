// const mealsApi = (search) => {
//     const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
//     fetch(url)
//         .then(res => res.json())
//         .then(data => displayMeals(data.meals))

// }
// const displayMeals = eachMeals => {
//     const mealsDiv = document.getElementById('meals-container');
//     mealsDiv.innerHTML = ``
//     eachMeals.forEach(meal => {
//         console.log(meal)
//         const mealDiv = document.createElement('div');
//         mealDiv.classList.add('col');
//         mealDiv.innerHTML = `
//         <div onclick="displeayMealsDetails(${meal.idMeal})" class="card">
//                     <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
//                     <div class="card-body">
//                       <h5 class="card-title">Card title</h5>
//                       <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//                     </div>
//                   </div>
//              `;
//         mealsDiv.appendChild(mealDiv);

//     })

// }
// const choiceFood = () => {
//     const scrachBtn = document.getElementById("scrach-input");
//     const scrachBtnText = scrachBtn.value;
//     mealsApi(scrachBtnText)
//     scrachBtn.value = ''
// }
// const displeayMealsDetails = (detail) => {
// console.log('id meal:', detail)
// }
// mealsApi('')

const mealsApi = (search) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayMeals(data.meals))
}

const displayMeals = (meals) => {
    const divContainer = document.getElementById('meals-container');
    divContainer.innerHTML = ''
    meals.forEach(meal => {
        const { strMealThumb, strMeal, strArea, idMeal } = meal
        const div = document.createElement('div');
        div.classList.add('col')
        div.innerHTML = `
     <div class="card">
             <img src="${strMealThumb}" class="card-img-top" alt="...">
             <div class="card-body">
             <h5 class="card-title">Meal Name :${strMeal}</h5>
             <p class="card-text">Meal Aria : ${strArea}</p>
             <button onclick="idCode(${idMeal})" class="btn btn-info">details</button>
        </div>
     </div>
     `
        divContainer.appendChild(div);

    })
}

const choiceFood = () => {
    const searchFood = document.getElementById('scrach-input');
    const searchFoodText = searchFood.value;
    console.log(searchFoodText)
    mealsApi(searchFoodText);
    searchFood.value = ''
}

const idCode = (code) => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${code}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayDetail(data.meals[0]))

}

const displayDetail = codeId => {
    const displayDiv = document.getElementById('details');
    const { idMeal,strCategory} = codeId
    displayDiv.innerHTML = `
    <h1>Food code : ${idMeal? idMeal : N/a}</h1>
    <h3>Category : ${strCategory? strCategory : N/a}</h3>
    `


}
mealsApi()


