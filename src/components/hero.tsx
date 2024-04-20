import About from "./aboutme";
import { NavigationMenuDemo } from "./navbar";
import Socials from "./socials/socials";
import Footer from "./footer";
import { TechStack } from "./techstacks/TechStack";
import Projects from "./projects";
import Header from "./header/header";
import FooterGraphic from "./ThreeD/ThreeD";
import { Form } from "./ui/form";
import ProfileForm from "./Form";
import BubbleText from "./bubbletext/BubbleText";
import Link from "next/link";
import { Button } from "./ui/button";

export default function Hero() {
  const techstacks =
    "JavaScript, TypeScript, React.js, Zustand, Next.js, BootStrap, Tailwind CSS, ShadCN UI, MongoDB, Express.js, Node.js, Firebase, Figma, Python, C, C++, Java";
  const date = new Date(Date.now())
  return (
    <>
      <main
        id="content"
        role="main"
        className="relative max-w-5xl gap-3 px-4 sm:px-6 lg:px-8 flex flex-col justify-center mx-auto size-full before:absolute before:top-0 before:start-1/2 before:bg-[url('https://preline.co/assets/svg/examples-dark/squared-bg-element.svg')] before:bg-no-repeat before:bg-top before:size-full before:-z-[1] before:transform before:-translate-x-1/2"
      >
        <Header />

        <div className="text-center pt-[6rem] px-4 sm:px-6 lg:px-8" id="home">
          <div className="text-2xl mb-6">
            Hello, Myself{" "}
            <span className="font-extrabold text-4xl sm:text-3xl">Arnab</span>
          </div>
          <h1 className="text-xl text-white sm:text-4xl">
            Welcome Here, I am a
          </h1>
          <h2 className="mt-1 sm:mt-3 text-4xl font-bold text-white sm:text-6xl">
            <span className="bg-clip-text bg-gradient-to-tr from-blue-600 to-purple-400 text-transparent">
              <BubbleText />
            </span>
          </h2>
        </div>

        <About />
        <Socials />
        <TechStack stack={techstacks} />
        <Projects />
        <div className="flex flex-col justify-center" id="contact">
          <div className="text-4xl text-center pt-[6rem] mb-5 font-bold bg-clip-text bg-gradient-to-tr from-blue-600 to-purple-400 text-transparent">
            Contact Me
          </div>
          <div className="px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            <div className="grid md:grid-cols-5 gap-10">
              <div className="md:col-span-3 text-center font-bold">
                <p>I&apos;m always hungry for a new opportunity to help others.</p>
                <p>You provide the vision, and I&apos;ll bring it to life!</p>

                <p>Let&apos;s work together....</p>

                <div className="mt-5 text-xl">
                  <Link href="mailto:arnabpalofficial2003@gmail.com">
                    <Button variant="outline">Drop Me a Message</Button>
                  </Link>
                </div>
              </div>
              <div className="md:col-span-2">
                <div className="mb-5 h-48">
                  <FooterGraphic />
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer className="mt-auto text-center py-3 bg-gradient-to-tr from-blue-950 to-purple-950">
          <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-white font-semibold">© Arnab Pal. {date.getFullYear()}. All rights reserved.</p>
          </div>
        </footer>
      </main>
    </>
  );
}
