import React from 'react'
import { Button, Table } from 'reactstrap'
import {baseURL} from '../../environments'
import { useNavigate } from 'react-router-dom';

function MovieTable(props) {
    // console.log(props.movies)

    const navigate = useNavigate();

    async function deleteMovie(id) {
        const url = `${baseURL}/movies/${id}`

        let requestOption = {
            headers: new Headers({
                'Authorization': props.token,
            }),
            method: 'DELETE'
        }

        try {

            let res = await fetch(url, requestOption);
            let data = await res.json();

            if(data) {
                props.fetchMovies();
            }
            
        } catch (err) {
            console.error(err.message)
        }
    }

    return (
        <>
            <h1>List of Movies</h1>
            <Table hover borderless striped>
                <thead>
                    <tr>
                        <th>
                            Title
                        </th>
                        <th>
                            Genre
                        </th>
                        <th>
                            Rating
                        </th>
                        <th>
                            Length
                        </th>
                        <th>
                            Released
                        </th>
                        <th>
                            Edit / Delete
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.movies.map(movie => {
                            return(
                                <tr key={movie._id}>
                                    <th scope='row'>{movie.title}</th>
                                    <td>{movie.genre}</td>
                                    <td>{movie.rating}</td>
                                    <td>{movie.length}</td>
                                    <td>{movie.releaseYear}</td>
                                    <td>
                                        <Button
                                            color='warning'
                                            onClick={
                                                () => navigate(`/movie/update/${movie._id}`)
                                            }
                                        >Edit</Button>
                                        <Button
                                            onClick={() => deleteMovie(movie._id)}
                                            color='danger'
                                        >Delete</Button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                    
                </tbody>
            </Table>
        </>
    )
}

export default MovieTable