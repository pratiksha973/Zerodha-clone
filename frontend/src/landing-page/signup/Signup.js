import React , {useState} from 'react';

function Signup() {
    
    const [formData , setFormData] = useState({
    name: "",
    email: "",
    password: "",
    });
    const handleChange = (e) =>{
        setFormData({
            ...formData,
            [e.target.name]:e.target.value,
        });
    };
    const handleSubmit =(e) =>{
        e.preventDefault();
    
          window.location.href = "http://localhost:3000";
    }
    return ( 
        < div className='container-landingpage' >
            <div className='signup-card'>
        <h2 className='signup-title'>Signup</h2>
        <form onSubmit={handleSubmit} className='signup-form' >
        <input type='text' name='name' placeholder='Enter your name ' onChange={handleChange} required>
        </input>
        <br></br>

         <input type='email' name='email' placeholder='Enter your email ' onChange={handleChange} required>
        </input>
        <br></br>
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          required
        />
        <br /><br />
        <button className='btn btn-primary signup-btn'>Create Account</button>
        </form>
        </div>
        </div>
     );
}
 export default Signup;

