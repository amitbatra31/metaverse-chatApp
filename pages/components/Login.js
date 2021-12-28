import Image from "next/image";
import { useMoralis } from "react-moralis";
function Login() {
  const { authenticate } = useMoralis();
  return (
    <div className="bg-black relative  p-2">
      <h1>Login Screen</h1>
      <div className="flex flex-col absolute z-50 w-full h-2/3 items-center justify-center space-y-4">
        <Image
          className="object-cover rounded-full "
          src="https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
          width={200}
          height={200}
        />
        <button
          onClick={() => authenticate()}
          className="rounded-lg p-5 bg-yellow-500 font-bold animate-pulse"
        >
          Login to the METAVERSE
        </button>
      </div>
      <div className="w-full h-screen ">
        <Image
          src="https://links.papareact.com/55n"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
}

export default Login;
