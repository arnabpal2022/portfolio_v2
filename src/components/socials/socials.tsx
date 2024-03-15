import Link from "next/link";
import { Button } from "../ui/button";
import { FaLinkedin, FaGithub, FaLongArrowAltRight } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

export default function Socials() {
  return (
    <>
      <div
        id="social-handles"
        className="flex flex-row gap-3 justify-center mt-6 mb-12 sm:mb-6"
      >
        <Link href="https://github.com/arnabpal2022">
          <Button variant="outline" size="icon">
            <FaGithub size="15" />
          </Button>
        </Link>

        <Link href="https://www.linkedin.com/in/arnab-pal-90946b244/">
          <Button variant="outline" size="icon">
            <FaLinkedin size="15" />
          </Button>
        </Link>

        <Link href="https://x.com/itzarnabpal2">
          <Button variant="outline" size="icon">
            <BsTwitterX size="15" />
          </Button>
        </Link>

        <Link href="/resume">
          <Button variant="outline">My Resume</Button>
        </Link>

      </div>
    </>
  );
}
