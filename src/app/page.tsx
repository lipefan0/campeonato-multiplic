import Form from "./components/Form/page";
import Image from "next/image";
import fb from "../../public/assets/fb-icon.png";
import insta from "../../public/assets/inta-icon.png";
import linkedin from "../../public/assets/linkedin-icon.png";
import twitter from "../../public/assets/twitter-icon.png";
import jovemJogador from "../../public/assets/jovem-jogando.jpg";
import Win from "../../public/assets/win.jpg";
import Vencedor from "../../public/assets/vencedor.jpg";

export default function Home() {
  return (
    <main className="bg-indigo-900">
      <section className="bg-[url('/assets/camp-fifa.png')] bg-no-repeat	bg-center bg-cover h-screen flex justify-center items-center">
        <div className="w-6/12 mx-auto flex items-center justify-center flex-col">
          <h1 className="text-7xl text-gray-100 py-6 text-center">
            Vem jogar com a gente
          </h1>
          <a href="" className="py-4 px-8 bg-indigo-500 rounded text-gray-100">
            Cadastrar
          </a>
        </div>
      </section>

      <section className="bg-gray-200">
        <div className="w-7/12 flex items-center justify-center mx-auto">
          <h3 className="sm:text-4xl text-xl text-center text-gray-900 p-6">
            A Multiplic inicia o primeiro campeonato de games da região!
          </h3>
        </div>

        <div className="flex items-center justify-evenly md:flex-row flex-col">
          <div className="bg-white md:w-3/12 w-8/12 pb-5 rounded-t-xl mb-4 shadow-2xl hover:scale-105 hover:transition-all ease-in duration-200">
            <Image
              className="shadow-md w-auto rounded-t-xl "
              alt=""
              src={jovemJogador}
            />
            <p className="text-gray-800 text-lg mt-4 px-1">
              Quer mostrar suas habilidades e se consagrar o grande campeão.
              Seja um veterano ou esteja começando agora, todos são bem-vindos!
            </p>
          </div>
          <div className="bg-white md:w-3/12 w-8/12 pb-5 rounded-t-xl mb-4 shadow-2xl hover:scale-105 hover:transition-all ease-in duration-200">
            <Image
              className="shadow-md w-auto rounded-t-xl "
              alt=""
              src={Win}
            />
            <p className="text-gray-800 text-lg mt-4 px-1">
              Prepare-se para uma experiência eletrizante, onde os melhores
              jogadores se enfrentarão em uma competição de tirar o fôlego!
            </p>
          </div>
          <div className="bg-white md:w-3/12 w-8/12 pb-5 rounded-t-xl mb-4 shadow-2xl hover:scale-105 hover:transition-all ease-in duration-200">
            <Image
              className="shadow-md w-auto rounded-t-xl "
              alt=""
              src={Vencedor}
            />
            <p className="text-gray-800 text-lg mt-4 px-1">
              Além da honra e do prestígio de se tornar o grande campeão, também
              haverá recompensas incríveis, incluindo prêmios em dinheiro!
            </p>
          </div>
        </div>
      </section>
      <Form />

      <footer className="flex w-full items-center justify-center my-10">
        <ul className="flex justify-around items-center w-1/3">
          <li>
            <a
              href="https://www.facebook.com/multiplictelecom"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image width={32} height={32} alt="" src={fb} />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/multiplictelecom/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image width={32} height={32} alt="" src={insta} />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/company/multiplictelecom/mycompany/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image width={32} height={32} alt="" src={linkedin} />
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/Multiplicnet"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image width={32} height={32} alt="" src={twitter} />
            </a>
          </li>
        </ul>
      </footer>
    </main>
  );
}
