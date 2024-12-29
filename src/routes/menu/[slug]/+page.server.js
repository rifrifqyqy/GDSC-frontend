export const load = async ({ params }) => {
	const id = params.slug;

	// GET: Mengambil data resep berdasarkan ID
	const fetchRecipe = fetch(`https://dummyjson.com/recipes/${id}`).then(async (response) => {
		if (!response.ok) {
			throw new Error('Failed to fetch recipe');
		}
		return response.json();
	});

	// GET: Mengambil semua data resep
	const fetchAllRecipes = fetch('https://dummyjson.com/recipes').then(async (response) => {
		if (!response.ok) {
			throw new Error('Failed to fetch all recipes');
		}
		return response.json();
	});

	try {
		const [recipe, allRecipes] = await Promise.all([fetchRecipe, fetchAllRecipes]);
		return {
			recipes: recipe,
			allRecipes: allRecipes.recipes
		};
	} catch (err) {
		console.error('Failed to load data:', err);
		return {
			recipes: null,
			allRecipes: []
		};
	}
};

export const prerender = true;