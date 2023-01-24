/**
 * 
 * @param {string} uid      firebase auth value
 * @param {object} recipe   recipe object
 * @returns confirmation or error
 *
 * CREATE action
 */
export const saveRecipe = async (uid, recipe) => {    
	try {
		let res = await fetch(`http://localhost:8000/recipes/add`, {
			method: 'post',
			headers: {'Content-Type':'application/json'},
			body: JSON.stringify({
				uid,
				recipe,
			}),
		});

		let confirmation = await res.json();
		return confirmation

	} catch(err) {
		return err;
	}
}


/**
 * 
 * @param {string} uid   firebase auth value
 * @returns recipes object or error
 *
 * READ action
 */
export const getRecipes = async ( uid ) => {
	try {
		let res = await fetch(`http://localhost:8000/recipes/?uid=${uid}`, {
			method: 'get',
		});

		let recipes = await res.json();
		return recipes;
		
	} catch(err) {
		console.log(err);
		return err;
	}
}