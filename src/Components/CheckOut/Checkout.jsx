import React, { useState } from 'react'

const Checkout = () => {
    // const [nombre, setNombre] = useState("")
    // const [apellido, setApellido] = useState("")
    // const [email, setEmail] = useState("")

    const [estados, setEstados] = useState({
        nombre:"",
        apellido:"",
        email: ""
    })
    const [errores, setErrores] = useState({
        nombre:"",
        apellido:"",
        email: ""
    })

    const handleChange = (e)=>{
        setEstados({...estados, [e.target.name]: e.target.value})
    }
    const handleSubmit = (e) => {
        e.preventDefault()//Hay que poner siempre esto que tenemos un formulario
        //ACA IRIA TODO LO QUE QUIERO HACER con el formulario. Comunicarse con la bd, pegarle a un endpoint, etc
        //Aca hacemos las validaciones
        //nOMBRE: 5 CARACTRES

        if(estados.nombre.length <5 ||!estados.email.includes("@") ){
            if(estados.nombre.length <5){
                setErrores({...errores, nombre: "El nombre debe tener mas de 5 caracteres"})
            }
            if(!estados.email.includes("@")){
                setErrores({...errores, email: "El email no es valido"})
            }
            return;
        }

       console.log(estados)
    }

    return (
        <div>
            <h1>Estoy en el checkout</h1>

            <form onSubmit={handleSubmit}>
                <input type="text" name="nombre" placeholder='nombre' onChange={handleChange} />
                <span style={{color: "crimson"}}>{errores.nombre}</span>
                <input type="text" name="apellido" placeholder='apellido' onChange={handleChange} />
                <span style={{color: "crimson"}}>{errores.apellido}</span>
                <input type="text" name="mail" placeholder="email" onChange={handleChange} />
                <span style={{color: "crimson"}}>{errores.email}</span>
                <button type="submit" >Enviar</button>
            </form>

        </div>
    )
}

export default Checkout