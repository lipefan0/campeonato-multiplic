import { FormEvent, useState } from "react";

export default function Form() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = {
      name,
      age,
      email,
      phone,
    };

    const response = await fetch("../../../api/submit", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const content = await response.json();

    //console.log(content);
    //alert(content.data.tableRange);
    alert("Parabéns você fez seu registro, aguarde o nosso contato!");

    setName("");
    setAge("");
    setEmail("");
    setPhone("");
  };

  return (
    <div className="my-10 mx-auto w-full max-w-sm">
      <div className="my-4">
        <h2 className="text-3xl text-gray-100">Eai ta esperando o que?</h2>
        <strong className="text-2xl text-blue-500">Cadastre agora!</strong>
      </div>

      <form className="space-y-6" action="" onSubmit={handleSubmit}>
        <div className="">
          <label
            className="block text-sm font-medium leading-6 text-gray-100"
            htmlFor="name"
          >
            Nome
          </label>
          <input
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            name="name"
            id="name"
            required
          />
        </div>
        <div>
          <label
            className="block text-sm font-medium leading-6 text-gray-100"
            htmlFor="number"
          >
            Idade
          </label>
          <input
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            type="number"
            name="number"
            id="number"
            required
          />
        </div>
        <div>
          <label
            className="block text-sm font-medium leading-6 text-gray-100"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            name="email"
            id="email"
            required
          />
        </div>
        <div>
          <label
            className="block text-sm font-medium leading-6 text-gray-100"
            htmlFor="tel"
          >
            Telefone
          </label>
          <input
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            type="tel"
            name="tel"
            id="tel"
            required
          />
        </div>
        <div>
          <button
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            type="submit"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
}
