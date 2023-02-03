function Text({label, nombre, type}){
    return(
        <>
          <div className="class-text">
                    <i className="fa-solid fa-user"></i>
                    <label>{label}</label>
                    <input  name={nombre} type={type} />
            </div>
        </>
    );
}
export default Text;