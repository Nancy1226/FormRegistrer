import { useRef } from 'react';
import {Navigate, useNavigate} from 'react-router-dom';
import Title from "../atoms/Title";
import Text from "../atoms/Text";
import ComboBox from '../atoms/ComboBox';
import "../../assets/styles/Login.css";
import Imagen from "../atoms/Imagen";

function FormRegistrerCar(){
    const endpoint = " http://34.225.239.102/api/autobus/register";
    const form = useRef()
    const navigate = useNavigate();
  
    const handlerClick = (e) => {
      const newForm = new FormData(form.current);
      e.preventDefault();

    if(newForm.get("clave") === "" || newForm.get("placa") === "" || newForm.get("numasientos") === ""  || newForm.get("nombre") === ""){//el simbolo de pesos despues se nombra la variable
        alert("campos vacios");
     }else{
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
                clave: newForm.get("clave"),
                placa: newForm.get("placa"),
                numasientos: newForm.get("numasientos"),
                fecha: newForm.get("fecha"),
                tipo: newForm.get("tipo"),
                nombre: newForm.get("nombre"),
                licencia: parseInt(10000 + Math.random() * 90000),
              }),
            };
        
            fetch(endpoint, options)
            .then((response) => response.json())
            .then((data) => {
              console.log(data.status);
              console.log(JSON.stringify(data))
              alert("Se registro exitosamente");
              navigate('/')
            });   
        }
       };
    

    return ( 
        <>
             <form ref={form}>
             <Imagen />
                <Title msn={"Registrer Car"} />
                <Text label={"Clave de autobus"} nombre={"clave"} type={"text"}  />
                <Text label={"Placa autobus"} nombre={"placa"} type={"text"} />
                <Text label={"Numero de asientos"} nombre={"numasientos"} type={"text"} />
                <Text label={"Fecha de alta"} nombre={"fecha"} type={"date"} />
                <ComboBox label={"Tipo"} nombre={"tipo"} />
                <Text label={"Nombre del chofer"} nombre={"nombre"} type={"text"} />
                <button type='button' onClick={handlerClick}>Registrar</button>
            </form>
        </>
     );
}
 
export default FormRegistrerCar;