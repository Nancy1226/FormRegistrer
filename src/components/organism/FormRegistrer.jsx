import { useRef } from 'react';
import {useNavigate} from 'react-router-dom';
import "../../assets/styles/Login.css";
import Title from "../atoms/Title";
import Text from "../atoms/Text";
import TextPasssword from "../atoms/TextPassword";
import Button from "../atoms/Button";


function FormRegistrer() {
  const endpoint = "http://34.225.239.102/api/registrar/usuario";
  const form = useRef()
  const handlerClick = (e) => {
    e.preventDefault();
    //navigate("/home")
    const newForm = new FormData(form.current);
    //let newName = newForm.get('name')
    //alert(`Nombre: ${newForm.get('name')} \nUsername: ${newForm.get('username')}`)

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
        if(data.status == true ){
        
            alert("Registro exitoso");
            alert(JSON.stringify(data));
            <meta httpEquiv='refresh' content='2;https://www.google.com/?hl=es' />
           
        }else{
            alert("No se registro correctamente");
        }
      });
  };

  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
        integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
      />
      <form ref={form}>
        <Title msn={"Registrar"} />
        <Text type={"Name"} nombre={"nombre"} />
        <Text type={"Username"} nombre={"usuario"} />
        <Text type={"E-mail"} nombre={"correo"} />
        <TextPasssword />
        <button onClick={handlerClick}>Registro</button>
      </form>
    </>
  );
}

export default FormRegistrer;
