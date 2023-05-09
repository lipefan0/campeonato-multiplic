import Image from "next/image";

export default function NavBar() {
  return (
    <header>
      <nav className="p-5 bg-slate-800 shadow flex items-center justify-center">
        <div>
          <a href="https://multiplicnet.com.br">
            <Image
              className="h-12 inline"
              src="https://multiplicfibra.com.br/image-email/fatura/multiplic-logo.png"
              alt="logo multiplic"
            />
          </a>
        </div>
      </nav>
    </header>
  );
}
