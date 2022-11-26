import React from 'react'

const Register = () => {
  return (
    <section className='herp has-background-grey-white is-fullheight is-fullwidth'>
        <div className="hero-body">
            <div className="container">
                <div className="columns is-centered">
                    <div className="column is-4-desktop">
                            <form className='box'>
                                <div className="field mt-5">
                                    <label className='label'>Name</label>
                                    <div className="controls">
                                        <input type="text" className='input' placeholder='name'/>
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <label className='label'>Email</label>
                                    <div className="controls">
                                        <input type="text" className='input' placeholder='Email'/>
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <label className='label'>Password</label>
                                    <div className="controls">
                                        <input type="password" className='input' placeholder='*********' autoComplete='false'/>
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <label className='label'>Confirm Password</label>
                                    <div className="controls">
                                        <input type="password" className='input' placeholder='Confirm Password...' autoComplete='false'/>
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <button className='button is-success is-fullwidth'>Register</button>
                                </div>
                            </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Register