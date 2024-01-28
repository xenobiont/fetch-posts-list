// Your code here

fetch('https://jsonplaceholder.typicode.com/posts')
	.then((response) => {
		if (!response.ok) throw new Error('Alarm!');
		return response;
	})
	.then((response) => response.json())
	.then((posts) => {
		const content = posts.slice(0, 5);
		console.log(content);
		const ol = document.createElement('ol');

		document.body.append(ol);
		content.forEach((post) => ol.append(createElement(post)));
	});

export function createElement(post) {
	const li = document.createElement('li');

	const titleEl = document.createElement('h2');
	titleEl.innerText = post.title;

	const descriptionEl = document.createElement('p');
	descriptionEl.innerText = post.body;

	li.append(titleEl);
	li.append(descriptionEl);
	return li;
}
