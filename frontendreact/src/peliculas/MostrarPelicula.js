import axios from 'axios';
import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

const URL = 'http://localhost:4000/movie/';

const ComponenteMostrarPelicula = () => {
    const[movies,setMovie] = useState([])
    useEffect(()=>{
        getMovies()
    },[]);

    const getMovies = async()=>{
        const res = await axios.get(URL);
        setMovie(res.data);
    }

    const deleteMovie = async(id) => {
        await axios.delete(`${URL}${id}`);
        getMovies();
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <Link to = '/create' className='btn btn-primary mt-2 mb-2'>Create</Link>
                    <table className='table'>
                        <thead className='table primary'>
                            <tr>
                                <th>Title</th>
                                <th>Content</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {movies.map((movie)=>{
                                <tr key={movie.id}>
                                    <td>{movie.title}</td>
                                    <td>{movie.content}</td>
                                    <td>
                                        <Link to = {`/edit/${movie.id}`} className='btn btn-info'>Editar</Link>
                                        <button onClick={deleteMovie(movie.id)} className='btn btn-danger'>Delete</button>
                                    </td>
                                </tr>
                            })}
                        </tbody>    
                    </table>
                </div>
            </div>
        </div>
    )
};

export default ComponenteMostrarPelicula;