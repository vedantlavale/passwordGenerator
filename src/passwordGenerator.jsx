import {useState,useEffect, useCallback} from 'react'

function PasswordGenerator() {
    const [length,setLength] = useState(8);
    const[charAllowed,setCharAllowed] = useState(false);
    const[numberAllowed,setNumberAllowed] = useState(false); 
    const[password,setPassword] = useState("")


    const passwordGenerator = useCallback(()=>{

        let pass = ""
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

        if(numberAllowed) str+="0123456789"
        if(charAllowed) str+="@#$%^&*-_+=[]{}~`"

        for (let i = 1; i <=length; i++) {
            const char = Math.floor(Math.random()*str.length)  + 1;

            pass += str.charAt(char)
        }

        setPassword(pass);
    }, [length,charAllowed,numberAllowed])


    useEffect(() => {
        passwordGenerator()
      }, [length, numberAllowed, charAllowed, passwordGenerator])

  return (
    <div className="w-full max-w-md px-4 py-3 mx-auto my-8 text-orange-500 bg-gray-800 rounded-lg shadow-md">
      <h1 className='my-3 text-center text-white'>Password generator</h1>
    <div className="flex mb-4 overflow-hidden rounded-lg shadow">
        <input
            type="text"
            value={password}
            className="w-full px-3 py-1 outline-none"
            placeholder="Password"
            readOnly
        />
        <button
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >copy</button>
        
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
        type="range"
        min={6}
        max={100}
        value={length}
         className='cursor-pointer'
         onChange={(e) => {setLength(e.target.value)}}
          />
          <label>Length: {length}</label>
      </div>
      <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={numberAllowed}
          id="numberInput"
          onChange={() => {
              setNumberAllowed((prev) => !prev);
          }}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                  setCharAllowed((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
    </div>
</div>
  );
}

export default PasswordGenerator