import { useContext } from 'react'
import { UserContext } from '../../context';

export const HomeScreen = () => {
  const user = useContext(UserContext);
  return (
    <main className="App">
      <section className="search">
        <input type="search" placeholder="Find by name"/>
      </section>
      <section className="cards">
      </section>
    </main>
  )
}
