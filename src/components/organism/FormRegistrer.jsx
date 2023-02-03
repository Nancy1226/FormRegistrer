import { useRef } from 'react';
import {Navigate, useNavigate} from 'react-router-dom';
import "../../assets/styles/Login.css";
import Title from "../atoms/Title";
import Text from "../atoms/Text";
import TextPasssword from "../atoms/TextPassword";
import Imagen from "../atoms/Imagen";

function FormRegistrer() {
  const endpoint = "http://34.225.239.102/api/registrar/usuario";
  const form = useRef()
  const navigate = useNavigate();

  const handlerClick = (e) => {
    e.preventDefault();
    const newForm = new FormData(form.current);
   
    if(newForm.get("nombre") === "" || newForm.get("usuario") === "" || newForm.get("correo") === "" || newForm.get("contrasenia") === ""){//el simbolo de pesos despues se nombra la variable
        alert("campos vacios");
     }else{
         alert("campos correctos")
         const options = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              nombre: newForm.get("nombre"),
              usuario: newForm.get("usuario"),
              correo: newForm.get("correo"),
              contrasenia: newForm.get("contrasenia"),
            }),
          };
      
          fetch(endpoint, options)
            .then((response) => response.json())
            .then((data) => {
              console.log(data.status);
              alert(JSON.stringify(data))
             navigate('/')
            });   
        }
     };



  return (
    <>
     
      <form ref={form}>
      <Imagen />
        <Title msn={"Registrar"} />
        <Text label={"Name"} type={"text"} nombre={"nombre"} />
        <Text label={"Username"} type={"text"} nombre={"usuario"} />
        <Text label={"E-mail"} type={"text"} nombre={"correo"} />
        <TextPasssword />
        <button type='button' onClick={handlerClick}>Registrar</button>
      </form>
    </>
  );
}

export default FormRegistrer;
