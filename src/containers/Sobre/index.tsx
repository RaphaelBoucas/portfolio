import Titulo from "../../components/Titulo"
import Paragrafo from "../../components/Paragrafo";
import { Githubsecao } from "./styles";



const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre</Titulo>
    <Paragrafo tipo="principal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi veniam consectetur non sed enim voluptatem cupiditate repellat tempore doloremque eius! Omnis laudantium id rem voluptate deserunt tenetur hic quam numquam.</Paragrafo>
    <Githubsecao>
    <img src="https://github-readme-stats.vercel.app/api?username=raphaelboucas&show_icons=true&theme=dracula&include_all_commits=true&count_private=true"/>
    <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=raphaelboucas&layout=compact&langs_count=7&theme=dracula"/>
    </Githubsecao>
  </section>
)

export default Sobre;
