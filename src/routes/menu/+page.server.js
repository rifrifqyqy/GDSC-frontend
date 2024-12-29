export const load = async ({ fetch }) => {
	const response = await fetch('https://dummyjson.com/recipes');
	if (!response.ok) {
		throw new Error('Failed to fetch recipes');
	}
	try {
		const data = await response.json();
		return { recipes: data.recipes };
	} catch (err) {
		console.error('Failed to parse JSON:', err);
		return { recipes: [] };
	}
};

export const prerender = true;