"use client";
import { useRef, useEffect } from "react";
import "./cards.css";
import { Button } from "../ui/button";
import { FaGithub } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";

interface cardprops {
  name: string,
  description: string,
}

export default function Card({ name, description }: cardprops) {
  const allCardsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if(!allCardsRef.current) return;

    const allCards = allCardsRef.current.querySelectorAll(".card");
    const btnOutline = allCardsRef.current.querySelectorAll("#btn");

    const handleMouseMove = (ev: any) => {
      allCards.forEach((e: any) => {
        const blob = e.querySelector(".blob");
        const fblob = e.querySelector(".fakeblob");

        const rec = fblob.getBoundingClientRect();

        blob.animate(
          [
            {
              transform: `translate(${
                ev.clientX - rec.left - rec.width / 2
              }px, ${ev.clientY - rec.top - rec.height / 2}px)`,
            },
          ],
          {
            duration: 300,
            fill: "forwards",
          }
        );
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div ref={allCardsRef}>
        <div className="card cursor-pointer h-60 sm:h-48">
          <div className="inner h-[232px] sm:h-[184px] gap-1">
            <h3 className="font-bold text-3xl flex flex-row items-center justify-start w-full mb-3 gap-5">
              {name}
            </h3>
            <p className="text-sm mb-2 leading-relaxed">{description}</p>
          </div>

          <div className="blob"></div>
          <div className="fakeblob"></div>
        </div>
      </div>
    </>
  );
}