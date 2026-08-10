import type { Metadata } from "next";
import { StartIntake } from "@/components/StartIntake";

export const metadata: Metadata = {
  title: "Start your protocol",
  description:
    "See if you qualify for physician-directed care with novimid. Short intake — takes less than 2 minutes.",
  alternates: { canonical: "/start" },
};

export default function StartPage() {
  return <StartIntake />;
}
