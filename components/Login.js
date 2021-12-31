import Image from "next/image";
import { useMoralis } from "react-moralis";
import Typewriter from "typewriter-effect";
function Login() {
  const { authenticate, isAuthenticating } = useMoralis();
  return (
    <div className="bg-black relative  p-2 overflow-x-hidden">
      <div
        className={`flex w-full absolute z-50 p-3 space-y-4 top-24 ${
          !isAuthenticating
            ? "items-start justify-start "
            : "items-center justify-center"
        } mb-4  text-white font-bold text-5xl md:text-7xl font-mono`}
      >
        {!isAuthenticating ? (
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString("Welcome to the metaverse")
                .callFunction(() => {
                  console.log("String typed out!");
                })
                .pauseFor(2500)
                .deleteAll()
                .callFunction(() => {
                  console.log("All strings were deleted");
                })
                .start();
            }}
          />
        ) : (
          <h1>Authenticating ...</h1>
        )}
      </div>
      {!isAuthenticating && (
        <div className="flex flex-col absolute z-50 w-full h-2/3 top-[150px] items-center justify-center space-y-4">
          <Image
            className="object-cover rounded-full hover:scale-75 transition-transform "
            src="/images/kidlogo.jpeg"
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
      )}
      <div className="w-full h-screen ">
        <Image
          // src="https://links.papareact.com/55n"
          src="/images/bg.jpg"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
}
export default Login;
