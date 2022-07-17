import './App.css';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [active, setactive] = useState(false);
  const [select,setselect] = useState([]);

  const [usuarios, setusuarios] = useState([
    {
      id:1,
      nombre:"Arturo Borja",
      puesto:"Programador Backend",
    },
    {
      id:2,
      nombre:"Roberto Carlos",
      puesto:"Programador fronttend",
    },
    {
      id:3,
      nombre:"Emmanuel Carrillo",
      puesto:"Programador backend",
    },
    {
      id:4,
      nombre:"Luis shara",
      puesto:"Programador frontend",
    }
  ])

  function handlechangecheckbox(e){
    console.log(e.target.value);
    var aux=null
    if(select.includes(e.target.value)){
      aux=select.filter(element=>element!==e.target.value);
    }else{
      aux=select.concat(e.target.value);
    }
    setselect(aux);

    if(aux.length>0){
      setactive(true)
    }else{
      setactive(false)
    }
  }

  return (
    <div className="App">
     <br/>
     <table className="table table-dark table-hover">
       <thead>
         <tr>
           <th></th>
           <th>ID</th>
           <th>Nombre</th>
           <th>Puesto</th>
         </tr>
       </thead>
       
      <tbody>
      {usuarios.map((usuario)=>(
        <tr>
          <td><input type="checkbox" value={usuario.id} onChange={handlechangecheckbox}/></td>
          <td>{usuario.id}</td>
          <td>{usuario.nombre}</td>
          <td>{usuario.puesto}</td>
        </tr>
      ))}
      </tbody>

    </table>
     <button className="btn btn-primary" disabled={!active}>Seleccionar</button>
    </div>
  );
}

export default App;
