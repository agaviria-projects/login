import React from 'react';
import { useForm } from 'react-hook-form';


export default function Login() {
    let {register, handleSubmit, formState : {errors}} = useForm();

    let onSubmited=(data)=>{
        console.log(data);

    };

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-sm-8 text-center">
          <h1 className="text-primary my-5">Formulario de Ingreso</h1>
        </div>
            <div className="col-sm-8 ">
            <form onSubmit={handleSubmit(onSubmited)} className='bg-light-subtle'>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Email</label>
                        <input type="email"{...register("correo",{required: true})} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        {errors.correo && <p className='text-danger'>Debes escribir un correo</p>}
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" {...register("contrasena",{required: true})} className="form-control" id="exampleInputPassword1"/>
                        {errors.contrasena && <p className='text-danger'> La contraseña es obligatoria</p>}
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                        <label className="form-check-label" for="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
            </div>    
      </div>
    </div>
  );
}

