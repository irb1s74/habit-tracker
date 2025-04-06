import type { Route } from "./+types/home";
import { HomePage } from "~/pages/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Habit tracker" },
    { name: "description", content: "Habit Tracker will be your personal coach and companion on your journey of all self-improvements" },
  ];
}

export default function Home() {
  return <HomePage />;
}
