import { Header } from './styles';
import { Logo } from '../components/logo';
import { Button } from '../components/button';

export function Home() {
  return (
    <Header>
      <Logo/>
      <div>
        <Button>Nova transação</Button>
        <Button>Nova categoria</Button>
      </div>
    </Header>
  )
}