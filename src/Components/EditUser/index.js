
import React, {useState , useEffect}  from 'react'
import { useParams } from "react-router-dom";

const EditUser = () => {
 
    const { id } = useParams();
    const [user, setUser] = useState(null);
    useEffect(() => {
        
    }, [id]);
    if (!user) {
        return <div>Loading...</div>;
    }
    return (
        <div>
            <h2>EditUser</h2>
            <p>user ID:{user.id}</p>
            <p>user Name:{user.name}</p>
            {/* Add form to edit user details */}
        </div>
    );

};

    


    
    

export default EditUser;