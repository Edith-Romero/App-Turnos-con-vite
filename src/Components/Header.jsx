function Header(){
    return(
     <>
    <h1 className="font-black text-5xl text-center md:w-2/3 mx-auto"> 
        Seguimiento Pacientes {""} 
        {/* {""} esto se coloca porque el span me deja las dos palabras juntas 
        y requiere espeacio y se le hace saber que es un string de java  */}
        <span className="text-indigo-600">Veterinaria</span>
    </h1>
     </>   
    )
}
export default Header;