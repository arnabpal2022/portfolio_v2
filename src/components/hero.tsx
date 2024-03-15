import About from "./aboutme";
import { NavigationMenuDemo } from "./navbar";
import Socials from "./socials/socials";
import Footer from "./footer";

export default function Hero() {
  return (
    <>
      <main
        id="content"
        role="main"
        className="relative max-w-5xl lg:h-screen px-4 sm:px-6 lg:px-8 flex flex-col justify-center mx-auto size-full before:absolute before:top-0 before:start-1/2 before:bg-[url('https://preline.co/assets/svg/examples-dark/squared-bg-element.svg')] before:bg-no-repeat before:bg-top before:size-full before:-z-[1] before:transform before:-translate-x-1/2"
      >
        <div className="mt-5">
          <NavigationMenuDemo />
        </div>

        <div className="text-center py-2 px-4 sm:px-6 lg:px-8">
          <div className="text-2xl mb-6">
            Hello, Myself{" "}
            <span className="font-extrabold text-4xl sm:text-3xl">Arnab</span>
          </div>
          <h1 className="text-xl text-white sm:text-4xl">
            Welcome to My Portfolio
          </h1>
          <h2 className="mt-1 sm:mt-3 text-4xl font-bold text-white sm:text-6xl">
            I am a{" "}
            <span className="bg-clip-text bg-gradient-to-tr from-blue-600 to-purple-400 text-transparent">
              Full Stack Developer
            </span>
          </h2>
        </div>

        <About />
        <Socials />
        <Footer/>
      </main>
    </>
  );
}
