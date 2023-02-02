import {useNavigate} from 'react-router-dom';
import { useRef } from 'react';
import { Link } from "react-router-dom";
import "../../assets/styles/Login.css";
import Title from "../atoms/Title";
import Text from "../atoms/Text";
import TextPasssword from "../atoms/TextPassword";



function FormLogin (){
    const navigate = useNavigate();
    const username = useRef();
    const passsword = useRef();
  
    const form = useRef();
  
    const handlerClick = (e)=>{
        e.preventDefault();
        const newForm = new FormData(form.current); // se crea un nuevo objeto llamado form y se le pasa la referencia    
        alert(`Nombre: ${newForm.get('username')}`); //el simbolo de pesos es la variable   
    }

    return ( 
    <>
        <form ref={form} >
            <Title msn={"Iniciar sesion"} />
            
            <Text type={"username"} nombre={"username"} />
        
        
            <TextPasssword ref={passsword} />
        
            <Link to="/registrer" className="link">¿No tienes una cuenta? Crea una</Link>
            
            <button onClick={handlerClick} type="button" >Iniciar sesion</button>
      </form>
    </> 
    );
}
 
export default FormLogin;