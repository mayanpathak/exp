import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'

import ExplorePool from './explore/Explore'
export function App() {
  const [count, setCount] = useState(0)
   
  return (
    <div>
        <ExplorePool/>
    </div>
  )
}


