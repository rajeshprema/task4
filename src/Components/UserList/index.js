import React, { useState,useEffect } from "react";
import{ link } from 'react-router-dom'
const UserList = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        
    }, []);
    return (
        <div>
            <h1>UserList</h1>
            <ul>
                {users.map((user) => (
                    <li key={user.id} >
                        <link to={`/profile/${user.id}`}>{user.name}</link>
                    </li>
                ))}
            </ul>
        </div>
    );

};
export default UserList;