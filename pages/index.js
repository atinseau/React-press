
import { Div, Heading, Button } from '../components'

const Bunch = [
	Div, Heading, Button
]

console.log (Bunch)

export default function Home() {
  return (
	<>
		{Bunch.map(C => <C>Salut</C>)}
	</>
  )
}
