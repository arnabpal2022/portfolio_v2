import Form from "@/components/Form";
import { NavigationMenuDemo } from "@/components/navbar";

export default function Contact() {
  return (
    <>
      <main
        id="content"
        role="main"
        className="relative max-w-5xl px-4 sm:px-6 lg:px-8 flex flex-col justify-center mx-auto size-full before:absolute before:top-0 before:start-1/2 before:bg-[url('https://preline.co/assets/svg/examples-dark/squared-bg-element.svg')] before:bg-no-repeat before:bg-top before:size-full before:-z-[1] before:transform before:-translate-x-1/2"
      >
        <div className="mt-5 sm:mt-12">
          <NavigationMenuDemo />
        </div>
        <div className="text-4xl text-center mt-10 mb-10 font-bold bg-clip-text bg-gradient-to-tr from-blue-600 to-purple-400 text-transparent">
          Contact Me
        </div>
        <Form />
      </main>
    </>
  );
}
