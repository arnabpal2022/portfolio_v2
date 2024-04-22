import Link from "next/link";
import { Button } from "../ui/button";
import { FaLinkedin, FaGithub, FaLongArrowAltRight } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { BsTwitterX } from "react-icons/bs";
import { FaChevronDown } from "react-icons/fa";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Socials() {
  return (
    <>
      <div
        id="social-handles"
        className="flex flex-row gap-3 justify-center mt-6 mb-12 sm:mb-6"
      >
        {/* <Link href="https://github.com/arnabpal2022">
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
        </Link> */}

        <Link href="https://drive.google.com/file/d/1Xy48skPYFNg1Toxs12RAi0hlw8Elg-fg/view?usp=sharing">
          <Button variant="outline">Check My Resume</Button>
        </Link>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              Socials<span className="px-1"></span>
              <FaChevronDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel className="text-center">
              My Social Handles
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <Link href="https://github.com/arnabpal2022">
                <DropdownMenuItem>
                  Github
                  <DropdownMenuShortcut>
                    <FaGithub size="15" />
                  </DropdownMenuShortcut>
                </DropdownMenuItem>
              </Link>
              <Link href="https://www.linkedin.com/in/arnab-pal-90946b244/">
                <DropdownMenuItem>
                  LinkedIn
                  <DropdownMenuShortcut>
                    <FaLinkedin size="15" />
                  </DropdownMenuShortcut>
                </DropdownMenuItem>
              </Link>

              <Link href="https://x.com/itzarnabpal2">
                <DropdownMenuItem>
                  X
                  <DropdownMenuShortcut>
                    <BsTwitterX size="15" />
                  </DropdownMenuShortcut>
                </DropdownMenuItem>
              </Link>

              <Link href="#contact">
                <DropdownMenuItem>
                  Contact Me
                  <DropdownMenuShortcut>
                    <IoMail size="15" />
                  </DropdownMenuShortcut>
                </DropdownMenuItem>
              </Link>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </>
  );
}
