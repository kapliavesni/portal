import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios"
import { useNavigate } from "react-router-dom";

function Signup() {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/register', {name, email, password})
        .then(result => {console.log(result)
        navigate('/login')
        })
        .catch(err=> console.log(err))
    }

    return (
        <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
            <div className="bg-white p-3 rounded w-25">
                <h2>Registracija</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Jūsų vardas</strong>
                        </label>
                        <input 
                          type="text"
                          placeholder="Įveskite savo vardą" 
                          autoComplete="off"
                          name="email"
                          required
                          className="form-control rounded-0"
                          onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Jūsų el. paštas</strong>
                        </label>
                        <input 
                          type="email"
                          placeholder="Įveskite savo el. paštą" 
                          autoComplete="off"
                          name="email"
                          required
                          className="form-control rounded-0"
                          onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Jūsų slaptažodis</strong>
                        </label>
                        <input 
                          type="password"
                          placeholder="Įveskite savo slaptažodį"
                          name="password"
                          required
                          className="form-control rounded-0"
                          onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                     <button type="submit" className="btn btn-success w-100 rounded-0">
                        Registruotis
                     </button>
                     </form>
                     <p>Turite profilį?</p>
                     <Link to="/login" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
                        Prisijungti
                     </Link>
                
            </div>
        </div>
    );
}

export default Signup;