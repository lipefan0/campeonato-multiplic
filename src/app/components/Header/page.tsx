import Image from "next/image";
import logo from "../../../../public/assets/white-logo-multiplic.webp";

export default function NavBar() {
  return (
    <header>
      <nav className="p-5 bg-slate-800 shadow flex items-center justify-center">
        <div>
          <a href="https://multiplicnet.com.br">
            <Image
              className="h-12 inline"
              src={logo}
              width={120}
              alt="logo multiplic"
            />
          </a>
        </div>
      </nav>
    </header>
  );
}
