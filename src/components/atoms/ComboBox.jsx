function ComboBox({nombre, label}){
    return ( 
    <>
            <div className="class-combo">
            <label>{label}</label>
                <select name={nombre}>
                <option value="Turismo">Turismo</option>
                <option value="Lujo">Lujo</option>
                </select>
            </div>
    </> );
}
 
export default ComboBox;