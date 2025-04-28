'use client'
import React, { useState } from "react";
import WelcomeMessage from "../components/WelcomeMessage";
import VisitorForm from "../components/VisitorForm";
import "../app/globals.css";

export default function VisitorRegistration() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [visitor, setVisitor] = useState<{
    username: string;
    password: string;
    fullName: string;
    ticketNumber: string;
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `/api?username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`
      );

      if (response.ok) {
        const data = await response.json();
        setVisitor(data);
        setError("");
      } else {
        const errorMessage = await response.text();
        setError(errorMessage);
      }
    } catch {
      setError("Error connecting to the server. Please try again later.");
    }
  };

  if (visitor) {
    return <WelcomeMessage visitor={visitor} />;
  }

  return (
    <VisitorForm
      username={username}
      setUsername={setUsername}
      password={password}
      setPassword={setPassword}
      handleSubmit={handleSubmit}
      error={error}
    />
  );
}
