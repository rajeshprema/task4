import React, { userState } from "react";

const CreateUser = () => {
    const [name, setName] = userState('');
 
    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    const handleSubmit = (e) => {
        e.prevantDefault();
    };

    return (
        <div>
            <h2>CreateUser</h2> 
            <form onSubmit={handleSubmit}>

                <label>

                    Name:
                    <input type="test" value={name} onChange={handleNameChange}/>
            
                </label>
                <button type="submit">Create</button>
            </form>    
        </div>
    )
    
    
}

export default CreateUser;