import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const Profil=()=>{
    const {id} = useParams()
    const [user,setUser] = useState({})
    const [loading,setLoading] = useState(true)
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res)=> setUser(res.data))
        .then(()=>setLoading(false))
        .catch((err)=> console.log(err))
    },[])
    return(
        <div>

            {
                loading == true ?
                <h1>Mazel</h1>
                :
                <div>
                    <h2>Profil Component</h2>
                    <h3>{user.name}</h3>
                    <h4>{user.address.street}</h4>
                </div>
            }
            
        </div>
    )
}

export default Profil