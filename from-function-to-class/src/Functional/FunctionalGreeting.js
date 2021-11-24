import React, {useState, useEffect} from 'react'

function useLocalStorage(key, defaultValue = ''){
    const [state, setState] = useState(()=>{
        console.log("hello");
        return localStorage.getItem(key) || defaultValue
    });

    useEffect(()=>{
        localStorage.setItem(key, state);
        // eslint-disable-next-line
    }, [key, state])

    return [state, setState]
}

function FunctionalGreeting() {

    const [name, setName] = useLocalStorage('name')
    const handleName = (e)=>{
        setName(e.target.value);
    }
    return (
        <div>
            <form>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" value={name} onChange={handleName}/>
            </form>
            {name? <strong>Hello {name}</strong> : "Please Write Your Name"}
        </div>
    )
}

export default FunctionalGreeting
