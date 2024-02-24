import { Hono } from 'hono';

// Create the main Hono app
const app = new Hono();

app.post('/api/v1/signup', (c) => {
	const body = c.body;
	console.log(body);
	return c.text('signup route')
})

app.post('/api/v1/signin', (c) => {
	const body = c.body;
	console.log(body);
	return c.text('signin route')
})

app.get('/api/v1/blog/:id', (c) => {
	const id = c.req.param('id')
	console.log(id);
	return c.text('get blog route')
})

app.post('/api/v1/blog', (c) => {
	const body = c.body;
	console.log(body);
	return c.text('signin route')
})

app.put('/api/v1/blog', (c) => {
	const body = c.body;
	console.log(body);
	return c.text('signin route')
})

export default app;
