import {useNavigate} from 'react-router-dom';
import { useRef } from 'react';
import { Link } from "react-router-dom";
import "../../assets/styles/Login.css";
import Title from "../atoms/Title";
import Text from "../atoms/Text";
import TextPasssword from "../atoms/TextPassword";
import Imagen from "../atoms/Imagen";


function FormLogin (){
    const navigate = useNavigate();
    const endpoint = "http://34.225.239.102/api/iniciar";
    const form = useRef()

  
    const handlerClick = (e)=>{
      e.preventDefault();
      const newForm = new FormData(form.current);
      if(newForm.get("usuario") === "" || newForm.get("contrasenia") === ""){
            alert("Campos vacios")  
      }else{
        const options = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            usuario: newForm.get("usuario"),
            contrasenia: newForm.get("contrasenia"),
          }),
        };
    
        fetch(endpoint, options)
          .then((response) => response.json())
          .then((data) => {
            if(data.status === true){
              alert("Datos Correctos");
              navigate('/registrerCar')
            }else(
                alert("Datos incorrectos")
            )
        }); 
      }
    };

    return ( 
    <>
   
    <form ref={form}>
      <Imagen />
        <Title msn={"Iniciar Sesion"} />
        <Text label={"Username"} type={"text"} nombre={"usuario"} />
        <TextPasssword />
        <Link to="/registrer" className="link">¿No tienes una cuenta? Crea una</Link>
        <button type="button" onClick={handlerClick}>Iniciar Sesion</button>
    </form>
    </> 
    );
}
 
export default FormLogin;