import React, {createContext, useState} from 'react'
export const Context = createContext(null);

export const Provider = () => {
    const genre = [
       { action: ['inuyasha', 'dbz', 'naruto', 'snk']},
       {comedy : ['one punch man', 'wotakoi', 'gekkan shoujo nozaki kun']}

    ]
    const targetAudience = [
        {shounen: ['inuyasha', 'snk', 'naruto', 'death note']},
        {seinen: ['rokuhoudou', 'barakamon', 'one punch man']}
    ]
    
    return(
        <Context.Provider value={{
            genre, targetAudience

        }}>
        </Context.Provider>
        
        
    )
}