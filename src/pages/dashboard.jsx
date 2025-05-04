import React from 'react'

export default function Dashboard() {
  return (
        <>
        <div className="container">
            <div className="row justify-content-around">
                <div className="col-sm-6">
                    <ul class="nav">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Active</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Link</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Link</a>
                        </li>
                    </ul>
                </div>
                <div className="col-sm-6">
                    <ul className='nav justify-content-end'>
                        <li class="nav-item">
                            <a class="nav-link disabled"><span className='btn btn-danger'>Logout</span></a>
                        </li>
                    </ul>  
                </div>
            </div>
        </div>
        <h1 className='text-primary'> Bienvenido Usuario</h1>
        </> 
  )
}
