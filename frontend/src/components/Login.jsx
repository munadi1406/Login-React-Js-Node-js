import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <section className='herp has-background-grey-white is-fullheight is-fullwidth'>
        <div className="hero-body">
            <div className="container">
                <div className="columns is-centered">
                    <div className="column is-4-desktop">
                            <form className='box'>
                                <div className="field mt-5">
                                    <label className='label'>Email Or Username</label>
                                    <div className="controls">
                                        <input type="text" className='input' placeholder='Username'/>
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <label className='label'>Password</label>
                                    <div className="controls">
                                        <input type="password" className='input' placeholder='*********' autoComplete='false'/>
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <button className='button is-success is-fullwidth'>Login</button>
                                    <Link to={'/register'}>Buat Akun</Link>
                                </div>
                            </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Login