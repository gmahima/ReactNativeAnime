import React, {createContext, useState} from 'react'
export const Context = createContext(null);

export const Provider = (props) => {
    const genre = [
       'action',
       'comedy'

    ]
    const audience = [
        'shounen', 'seinen'
    ]
    
    return(
        <Context.Provider value={{
            genre, audience

        }}>
           { props.children}
        </Context.Provider>
        
        
    )
}