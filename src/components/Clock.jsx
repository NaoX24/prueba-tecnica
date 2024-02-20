import { useState, useEffect } from 'react'


const Clock = () => {
  const [now, setNow] = useState(new Date());
  const [clockOn, setClockOn] = useState(true)
  
  const updateNow = () => {
    setNow(new Date())
  }
  
  useEffect(() => {
    if(clockOn) {
        setTimeout(updateNow, 1000)
    }
    
  })
  
  const formatClockNum = (clock_num) => {
    return clock_num.toString().padStart(2, '0')
  }
  
  return(
    <>
        <span>{formatClockNum(now.getHours())}:{formatClockNum(now.getMinutes())}:{formatClockNum(now.getSeconds())}</span>
        <button onClick={() => setClockOn((clock) => !clock)}>Clock Button</button>
    </>
    
  )
}
export default Clock