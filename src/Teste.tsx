import styled from 'styled-components'

type BotaoProps = {
  principal:boolean
  fontSize?:string // No TS o ? determina que o parametro não é obrigatório.
}

const Botao = styled.button<BotaoProps>`
  background-color: ${props => props.principal ? 'green' : 'blue'};
  font-size: ${props => props.fontSize || '16px'};
`

const BotaoPerigo = styled(Botao)`
background-color: red;
color:#fff;

span {
  text-decoration: line-through;
}
`

function Teste () {

  return (
      <>
        <Botao principal fontSize="18px">Oi</Botao>
        <Botao principal={false} > Foda-se</Botao>
        <BotaoPerigo as="a" principal><span>Não clique aqui.</span></BotaoPerigo>
      </>

  )
}

export default Teste
