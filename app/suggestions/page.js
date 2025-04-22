"use client";
import Header from "../components/header";
import Suggestions from "./suggestions";

export default function SuggestionsPage() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <Header />
      <Suggestions />
    </div>
  );
}