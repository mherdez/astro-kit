interface Suma {
  a: number
  b: number
}

export const Mio = (): JSX.Element => {
  const frutas = ['manzana', 'pera', 'platano']

  const Persona = {
    nombre: 'juan',
    edad: 20
  }

  const sumarNumeros = ({ a, b }: Suma): number => {
    return a + b
  }

  sumarNumeros({ a: 1, b: 2 })

  return (
    <>
      <h1 className='clases y mas'>hola mundo</h1>
      <ul>
        {frutas.map((fruta) => (
          <li key={fruta}>{fruta}</li>
        ))}
      </ul>
      <p>
        {Persona.nombre} - {Persona.edad}
      </p>
    </>
  )
}
