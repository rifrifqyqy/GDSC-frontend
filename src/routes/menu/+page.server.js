export const load = async ({ fetch }) => {
	const response = await fetch('https://dummyjson.com/recipes');
	if (!response.ok) {
		throw new Error('Failed to fetch recipes');
	}

	const d = await response.json();
	return { recipes: d.recipes };
};
