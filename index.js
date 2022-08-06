const get_meal_btn = document.getElementById('get_meal');
const meal_container = document.getElementById('meal');


// window.addEventListener("click", () => {
//     document.getElementsByClassName("button-primary").innerHTML = "test"
// }) 

get_meal_btn.addEventListener("click", () => {
    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
        .then(res => res.json())
        .then(res => { createMeal(res.meals[0]) });
});


const createMeal = (meal) => {
    const ingredients = [];

    for (let i = 1; i <= 20; i++) {
        if (meal[`strIngredient${i}`]) {
            ingredients.push(`${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`)
        }    
    }
	
    const newInnerHTML = `
		<div class="recipe">

            <div id="header">
            <h2>${meal.strMeal}</h2>
                <img src="${meal.strMealThumb}" alt="Meal Image">
            </div>

            <div id="ingredients">
                <h5>Ingredients:</h5>
                <ul>
                    ${ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
                </ul>
            </div>

            <div id="instructions">
                <p>${meal.strInstructions}</p>
            </div>

        </div>`;
	
    meal_container.innerHTML = newInnerHTML;
};



// add print button
// add accessibility features? review inherited 
// add affiliate links
// add footer
