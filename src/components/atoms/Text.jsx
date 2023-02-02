function Text({type, nombre}){
    return(
        <>
          <div className="class-text">
                    <i className="fa-solid fa-user"></i>
                    <label>{type}</label>
                    <input type="text" name={nombre} />
            </div>
        </>
    );
}
export default Text;