import Link from "next/link";
import Card from "./cards/cards";
import "./components.css";

export default function Projects() {
  return (
    <div id="projects">
      <div className="text-4xl text-center pt-[6rem] font-bold bg-clip-text bg-gradient-to-tr from-blue-600 to-purple-400 text-transparent">
        My Projects
      </div>
      <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-3 mt-6 mb-6">
        <Card
          name="chat-room"
          description="Welcome to our React and Firebase-powered chatroom app! Experience real-time messaging with a sleek, responsive design. Join the conversation and connect with others effortlessly."
        />
        <Card
          name="CaptiGen"
          description="Captivate, connect, convert. Your video's secret weapon for global engagement and A Effortless Perfect solution for generating subtitles. Start now!"
        />
        <Card
          name="PokeDex"
          description="Gotta Catch'em All! Welcome to Your Pokemon Wikipediaaaa..."
        />
        <Card
          name="toDoList"
          description="Welcome to My To-Do List App! This is a simple and intuitive application designed to help you organize your tasks, set priorities, and stay on top of your daily activities."
        />
      </div>
      <div className="text-right font-bold text-xl mb-2">
        <Link href="https://github.com/arnabpal2022">
          <p className="hover-underline-animation">
            More Projects in Here ⮩
          </p>
        </Link>
      </div>
    </div>
  );
}
