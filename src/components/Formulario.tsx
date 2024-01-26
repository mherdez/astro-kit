import React, { useState } from 'react'

const initInput = {
  first_name: '',
  last_name: '',
  email: ''
}

function Formulario() {
  const [input, setInput] = useState(initInput)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const { first_name, last_name, email } = Object.fromEntries(
      new FormData(event.currentTarget)
    )
    setInput({
      first_name: first_name.toString(),
      last_name: last_name.toString(),
      email: email.toString()
    })
    console.log(input)
  }

  return (
    <>
      <form className='flex flex-col gap-10 text-black' onSubmit={handleSubmit}>
        <input type='text' name='first_name' />
        <input type='text' name='last_name' />
        <input type='email' name='email' />
        <button type='submit' className='bg-red-800 text-white'>
          Enviar
        </button>
      </form>
      {input.first_name && (
        <div className='my-10 rounded border-4 border-yellow-500 p-4'>
          <p>
            {input.first_name} {input.last_name}
          </p>
          <p>{input.email}</p>
        </div>
      )}
    </>
  )
}

export default Formulario
