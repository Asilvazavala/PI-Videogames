import React, {useState, useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { postGame, getGenres } from '../actions';
import '../styles/CreateGame.css';


export const CreateGame = () => {

  //Traer el estado del reducer 
  const genres = useSelector((state) => state.genres);
  const dispatch = useDispatch();
  const history = useHistory();
 
  const [input, setInput] = useState({
    name: '',
    descripcion: '',
    fecha: '',
    rating: '',
    genero: [],
    plataforma: [],
  })

  // Ejecuto la action getGenres de ./Actions
  useEffect(() => {
    dispatch(getGenres())
  }, [dispatch]);

  const handleChange = (e) => {
    e.preventDefault();
    setInput({
      ...input,
      [e.target.name] : e.target.value
    })
  };

  const handleCheckbox = (e) => {
    e.preventDefault();
    if(e.target.checked) {
      setInput({
        ...input,
        plataforma: e.target.value
      })
    }
  };

  const handleSelect = (e) => {
    setInput({
      ...input,
      genero: [...input.genero, e.target.value]
    })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);
    dispatch(postGame(input));
    alert('Juego creado con éxito!!')
    setInput({
      name: '',
      descripcion: '',
      fecha: '',
      rating: '',
      genero: [],
      plataforma: [],
    })
    history.push('/home');
  }

  return (
    <div>
      <h1>Fill in the fields</h1>
      <form className='form-container'>
        <div className='form-name'>
          <label>Name:</label>
          <input
          type='text'
          value={input.name}
          name='name'
          onChange={(e) => handleChange(e)}
          ></input>
        </div>
        
        <div className='form-description'> 
          <label>Description:</label>
          <input
          type='text'
          value={input.descripcion}
          name='descripcion'
          onChange={(e) => handleChange(e)}
          ></input>
        </div>

        <div className='form-date'>
          <label>Release Date:</label>
          <input
          type='date'
          value={input.fecha}
          name='fecha'
          onChange={(e) => handleChange(e)}
          ></input>
        </div>

        <div className='form-rating'>
          <label>Rating:</label>
          <input
          type='number'
          value={input.rating}
          name='rating'
          onChange={(e) => handleChange(e)}
          ></input>
        </div>

        <div className='form-image'>
          <label>Image:</label>
          <input
          type='text'
          value={input.image}
          name='image'
          onChange={(e) => handleChange(e)}
          ></input>
        </div>

        <div className='form-genre'>
          <label>Genre(s):
          <select name='genero' onChange={(e) => handleSelect(e)}>
            {genres.map((genre) => {
              return (
                <option value={genre.name}>{genre.name}</option>
              )
            })}
          </select>
          </label>
        </div>

        <div className='form-paltform'>
          <label>Platform(s):
          <input
          type='checkbox'
          value={input.plataforma}
          name='plataforma'
          onChange={(e) => handleCheckbox(e)}
          />PC</label>
          
          <br></br><label>
          <input
          type='checkbox'
          value={input.plataforma}
          name='plataforma'
          onChange={(e) => handleCheckbox(e)}
          />macOS</label>
          
          <br></br><label>
          <input
          type='checkbox'
          value={input.plataforma}
          name='plataforma'
          onChange={(e) => handleCheckbox(e)}
          />Linux</label>
          
          <br></br><label>
          <input
          type='checkbox'
          value={input.plataforma}
          name='plataforma'
          onChange={(e) => handleCheckbox(e)}
          />PlayStation 5</label>
          
          <br></br><label>
          <input
          type='checkbox'
          value={input.plataforma}
          name='plataforma'
          onChange={(e) => handleCheckbox(e)}
          />PlayStation 4</label>

          <br></br><label>
          <input
          type='checkbox'
          value={input.plataforma}
          name='plataforma'
          onChange={(e) => handleCheckbox(e)}
          />PlayStation 3</label>
          

          <br></br><label>
          <input
          type='checkbox'
          value={input.plataforma}
          name='plataforma'
          onChange={(e) => handleCheckbox(e)}
          />Xbox Series S/X</label>
          
          <br></br><label>
          <input
          type='checkbox'
          value={input.plataforma}
          name='plataforma'
          onChange={(e) => handleCheckbox(e)}
          />Xbox One</label>

          <br></br><label>
          <input
          type='checkbox'
          value={input.plataforma}
          name='plataforma'
          onChange={(e) => handleCheckbox(e)}
          />Xbox 360</label>

          <br></br><label>
          <input
          type='checkbox'
          value={input.plataforma}
          name='plataforma'
          onChange={(e) => handleCheckbox(e)}
          />Nintendo Switch</label>
        </div>
      </form>
      <Link to = '/home'><button className='boton-volver'>Return</button></Link>
      <button 
        type='submit'
        className='boton-crear' 
        onSubmit={(e) => handleSubmit(e)}>Create game
      </button>
    </div>
  )
}
