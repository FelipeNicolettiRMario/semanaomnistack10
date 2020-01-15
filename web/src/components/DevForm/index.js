import React,{useState,useEffect} from 'react';

function GetForm({onSubmit}) {

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
          (position)=>{
            const {latitude,longitude} = position.coords;
            setLatitude(latitude);
            setLongitude(longitude);
    
          },
          (err) =>{
            console.log(err)
          },
          {
            timeout:1000,
          }
        )
      },[])

    const [latitude,setLatitude] = useState('');
    const [longitude,setLongitude] = useState('');
    const [github_username,setGithub_username] = useState('');
    const [techs,setTechs] = useState('');

    async function HandleSubmit(e) {
        e.preventDefault();

    await onSubmit({
      github_username,
      techs,
      latitude,
      longitude
    });


    setGithub_username('');
    setTechs('');
    }

    return ( 
        <form onSubmit={HandleSubmit}>

          <div className = "input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input 
            name="github_username" 
            id="github_username" 
            required
            value = {github_username}
            onChange = {e => setGithub_username(e.target.value)}
            />
          </div>

          <div className = "input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input 
            name="techs" 
            id="techs"
            required
            value = {techs}
            onChange = {e => setTechs(e.target.value)}
            />
          </div>

        <div className="input-group">
          <div className="input-block">
            <label htmlFor="latitude">Latitude</label>
            <input  
            name="latitude" 
            id="latitude" 
            required 
            value={latitude}
            onChange = {e => setLatitude(e.target.value)}
            />

          </div>

          <div className="input-block">
            <label htmlFor="longitude">Longitude</label>
            <input  name="longitude" 
            id="longitude" 
            required 
            value={longitude}
            onChange = {e => setLongitude(e.target.value)}

            />
          </div>
          </div>
        <button type="submit">Salvar</button>
        </form>
    )
}

export default GetForm;