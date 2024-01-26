import { useEffect, useRef, useState } from 'react'

export const Example = () => {
  // useState
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log(count)
  }, [count])

  // useRef
  const ref = useRef(0)

  const incrementRef = () => {
    ref.current++
    console.log(ref.current)
  }
  const decrementRef = () => {
    ref.current--
    console.log(ref.current)
  }

  return (
    <div className='p-10 border-yellow-400 border-4 w-[340px] flex justify-center items-center flex-col rounded-lg'>
      <p className='text-5xl'>Contador</p>
      {/* <p className='text-8xl py-10'>{count}</p> */}
      <p className='text-8xl py-10'>{ref.current}</p>
      <div className='flex gap-x-6 select-none'>
        <button
          // onClick={() => setCount(count - 1)}
          onClick={decrementRef}
          className='text-3xl py-2 px-4 bg-green-700 rounded hover:bg-green-800'
        >
          -
        </button>
        <button
          // onClick={() => setCount(count + 1)}
          onClick={incrementRef}
          className='text-3xl py-2 px-4 bg-red-700 rounded  hover:bg-red-800'
        >
          +
        </button>
      </div>
    </div>
  )
}
