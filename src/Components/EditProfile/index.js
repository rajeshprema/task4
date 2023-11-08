import React from "react";
import { useParams } from "react-router-dom";

const EditProfile = () => {
    const { id } = useParams();
    return (
        <div>
            <h2>EditProfile</h2>
            <p>users ID:{id}</p>
            
            {/* Add form to edit user profile */}
        </div>
    );
};
export default EditProfile;