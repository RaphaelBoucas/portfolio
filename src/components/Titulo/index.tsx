import { Titulo as TituloEstilo } from "./styles";

export type Props = {
  children: string;
  fontSize?: number;
};


const Titulo = (props: Props) => (
  <TituloEstilo fontSize={props.fontSize || 14}>{props.children}</TituloEstilo> //
);
export default Titulo;
