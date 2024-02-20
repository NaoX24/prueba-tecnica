import { useState} from 'react'
import Clock from './Clock'

const Header = () => {
    const [count, setCount] = useState(0)
    return (
        <>
          <h1>My React App</h1>
          <button onClick={() => setCount((count) => count + 1)}>
            Counter: {count}
          </button>
          <Clock />
        </>
      );
}

export default Header