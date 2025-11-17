import React, { useState } from 'react'   



export default function Connect() {

    const [user, setUser] = useState(false);
    const handleClick = () => {
      setUser(!user);
    }
    return (
        <div>

            <button onClick={handleClick}>click</button>
            
            {user ? <button onClick={handleClick}>Deconnexion</button>
             : <button onClick={handleClick}>Connexion</button>}
            
        </div>
    )
}
