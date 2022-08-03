import { useContext } from 'react'
import { UserContext } from '../../context';

export const HomeScreen = () => {
  const user = useContext(UserContext);
  return (
    <div>{user}</div>
  )
}
