import { Filter, Header, Main, Section, Balance } from './styles';

import { Title } from '../components/title';
import { Logo } from '../components/logo';
import { Button } from '../components/button';
import { Input } from '../components/input';
import { InputGrup } from '../components/input/styles';
import { ButtonIcon } from '../components/button-icon';
import { Card } from '../components/card';


export function Home() {
  return (
    <>
    <Header>
      <Logo/>
      <div>
        <Button>Nova transação</Button>
        <Button>Nova categoria</Button>
      </div>
    </Header>
    <Main>
    <Section>
      <Filter>
       <Title title='Saldo' subtitle='Recietas e despesas no período'/>
       <InputGrup>
        <Input variant='dark' label='Inicio' placeholder='dd/mm/aaaa' type='date' />
        <Input variant='dark' label='Fim' placeholder='dd/mm/aaaa' type='date' />
        <ButtonIcon/>
       </InputGrup>
      </Filter>
      <Balance>
        <Card title='Saldo' amount={100000}/>      
        <Card title='Saldo' amount={100000} variant='incomes'/>
        <Card title='Saldo' amount={100000} variant='expenses'/>
      </Balance>
      </Section>
    </Main>
    </>
  )
}