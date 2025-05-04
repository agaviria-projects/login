import React from 'react';
import { useForm } from 'react-hook-form';


export default function Login() {
    let {register, handleSubmit} = useForm();
  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-sm-8 text-center">
          <h1 className="text-primary my-5">Formulario de Ingreso</h1>
        </div>
            <div className="col-sm-8 ">
            <form onSubmit={handleSubmit()} className='bg-light-subtle'>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Usuario</label>
                        <input type="email"{...register("correo",{required: true})} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" {...register("contrasena",{required: true})} className="form-control" id="exampleInputPassword1"/>
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

