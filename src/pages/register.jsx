import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom"; 

export default function Register({}) {
    let {register, handleSubmit,watch, formState : {errors}} = useForm();
    let contra = watch("contrasena")
    let navigate = useNavigate();
    let onSubmited= async(data)=>{
        console.log("datos del formulario");
        console.log(data);
        try{
           let respuesta =await axios.post("http://localhost:8081/loginApi/register", {
               nombre:data.nombre,
               correo:data.correo,
               contrasena:data.contrasena
           }); 
           alert(respuesta.data.message)   
           navigate("/Login");
           console.log("respuesta del servidor");
           console.log(respuesta)    
        }catch(error){
            console.log(error);
        }
    };
    
  return (
    <>
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-sm-8 text-center">
          <h1 className="text-primary my-5">Formulario de Registro</h1>
        </div>
            <div className="col-sm-8 ">
            <form onSubmit={handleSubmit(onSubmited)} className='bg-light-subtle'>
                    <div className="mb-3">
                        <label className="form-label">Nombre de Usuario</label>
                        <input type="text"{...register("nombre",{required: true})} className="form-control" />
                        {errors.nombre && <p className='text-danger'>Debes escribir un nombre de usuario</p>}
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email address</label>
                        <input type="email"{...register("correo",{required: true})} className="form-control"/>
                        {errors.correo && <p className='text-danger'>Debes escribir un correo</p>}
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input type="password" {...register("contrasena",{required: true})} className="form-control"/>
                        {errors.contrasena && <p className='text-danger'> La contraseña es obligatoria</p>}
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Confirmar Password</label>
                        <input type="password" 
                        {...register("Confirmar_contrasena",
                            {required: "Por favor digita una contraseña",
                                validate:(value)=>value == contra || "La contraseña no coincide"
                            })
                        } className="form-control"/>
                        {errors.Confirmar_contrasena && <p className='text-danger'>{errors.Confirmar_contrasena.message}</p>}
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" />
                        <label className="form-check-label" for="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
            </div>    
      </div>
    </div>
    </>  
  ) 
}
