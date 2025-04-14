import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono Api!')
})


// Dummy movie data
const movies = [
  { id: '1', title: 'Inception', year: 2010, genre: 'Sci-Fi' },
  { id: '2', title: 'The Dark Knight', year: 2008, genre: 'Action' },
  { id: '3', title: 'Interstellar', year: 2014, genre: 'Adventure' },
]

// List all movies
app.get('/movies', (c) => {
  return c.json(movies)
})

export default app
