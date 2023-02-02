import ".././assets/styles/Login.css";
import Title from '../components/atoms/Title';
import Text from '../components/atoms/Text';
import TextPasssword from '../components/atoms/TextPassword';
import Button from "../components/atoms/Button";

function RegistrerMain(){
    return(
        <>  
           <form action="">
                <Title msn={"Registrer of products"} />
                <Text  type={"clave autobus"}/>
                <Text  type={"placa autobus"}/>
                <Text  type={"numero de asientos"}/>
                <Text  type={"fecha de alta"}/>
                <Text type={"tipo"}/> 
                <Text type={"nombre del chofer"}/>
                <Text type={"numero de licencia"}/>
                <Button name={"Alta de autobus"}/>
            </form>
        </>
    );
}
export default RegistrerMain;