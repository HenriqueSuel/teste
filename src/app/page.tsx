import Image from 'next/image'

export default async function Home() {
  const teste = await fetch('https://api.github.com/users/henriquesuel');
  const user = await teste.json()
  
  console.log(user);
  return (
    <h1>{JSON.stringify(user)}</h1>
  )
}
