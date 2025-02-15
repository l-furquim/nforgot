import { Footer } from "@/app/_components/footer";
import { PublicNav } from "@/app/_components/public-pages/public-nav";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export default function StartingPage(){
  return (
    <div className="flex  w-full items-start flex-col">
      <PublicNav/>
      <div className="ml-20 pr-4 pt-24">
        <h1 className="font-bold text-2xl">Começando com o nforgot</h1>
        <p className="w-[80%] pt-20">
          Se você não sabe por onde começar com o nforgot, este guia é para você. Iremos aprender a criar uma nota, 
          algumas das funcionalidade do editor do nforgot, e como você pode publicar suas notas para todos verem !
        </p>
        <h2 className="pt-20 font-bold text-xl mb-2">
          Crie uma conta
        </h2>
        <Separator orientation="horizontal" className="w-[80%]" />
        <p className="pt-20">
          Para criar sua conta, acesse <span className="text-muted-foreground">  Pagina inical &gt; Tenha o nforgot  </span>
        </p>

        <Image
        className="mt-16 rounded-md shadow-lg"
        src={"/documentation/signUpSs.png"} 
        alt="Print do botao de criar uma conta" 
        width={900}
        height={200}
        />
        <p className="mt-10">
          Após isso, escolha entrar com sua conta do github (por enquanto nossa única forma de login)
        </p>
        <h2 className="pt-20 font-bold text-xl mb-2">
          Crie uma nota
        </h2>
        <Separator orientation="horizontal" className="w-[80%]" />
        
        <p className="mt-10">
          Ao entrar você deve ser capaz de visualizar suas notas (no momemento você provavalemente não possui nenhuma) e um botão
          chamado criar nota, por enquanto, vamos clicar nele 
        </p>

        <Image
        className="mt-16 rounded-md shadow-lg"
        src={"/documentation/newNoteSs.png"} 
        alt="Print do botao de criar uma nota" 
        width={900}
        height={200}
        />

        <h2 className="pt-20 font-bold text-xl mb-2">
                O editor de texto
        </h2>
        <Separator orientation="horizontal" className="w-[80%]" />
        <p className="mt-10">
          Bem vindo ao editor de texto do nforgot ! <br/> <br/>
          Aqui você pode renomear sua nota, definida por padrão como Nova nota. 
          Além disso, você é capaz de adicionar um emoji a sua nota, para identifica-la melhor visualmente. 
        </p>
        <p className="mt-10">
          Vamos começar com o editor, pressione a tecla &quot;/&quot; após clicar em cima de seu editor, Dessa forma você é capaz de visuailzar as ferramentas do editor.
          Tais como, cabeçalhos, listas to do&apos;s, imagens e por ai vai.
        </p>

        <h2 className="pt-20 font-bold text-xl mb-2">
                Publicar uma nota
        </h2>
        <Separator orientation="horizontal" className="w-[80%]" />

        <p className="mt-10">
          Após todas suas anotações, sentiu que seria necessário compartilhar isso com as pessoas ? Para que elas se 
          beneficiem de toda sua coletânia ?  
        </p>
        <p className="mt-10">
          No nforgot você é capaz de fazer isso com um simples clicar de botões. No canto superior direito de sua nota, existe
          um botão indicando o status atual dela (muito provavelmente não publicada), ao cliar nele você é capaz de publicar sua nota para o mundo.
        </p>

        <p className="mt-10">
          Mas fique tranquilo, caso se arrependa mais para frente você pode acessar o mesmo botão e despublicar sua nota para que ninguem mais tenha acesso !
        </p>
        <Image
        className="mt-16 rounded-md shadow-lg"
        src={"/documentation/publishNoteSs.png"} 
        alt="Print do botao de criar uma nota" 
        width={900}
        height={200}
        />

        <p className="mt-10">
          Após a publicação terminar, você pode copiar o link gerado para sua nota e enviar para todos que deseja <br />
          Note que, mesmo a nota sendo pública para visualização, ninguém é capaz de edita-la
        </p>

        <h2 className="pt-20 font-bold text-xl mb-2">
                Parabéns
        </h2>

        <Separator orientation="horizontal" className="w-[80%]" />
        <p className="mt-10 pb-10">
          Obrigado por ler até aqui, acabamos o primeiro guia do nforgot de como começar com o pé direito, agora você é capaz de utilizar desta ferramenta e comunidade incriveis. <br /> <br />
          Qualquer duvida ou report, por favor envie para mim via email: <span className="text-muted-foreground"> furquimmsw@gmail.com </span>
        </p>
      </div>
      <Footer/>
    </div>
  )
}