'use client'
import { useState, FormEvent } from "react";
import { validateVisitor } from "../utils/visitorValidation";
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

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = validateVisitor(username, password);
    if (result.success) {
      if (result.data) {
        setVisitor(result.data);
      }
      setError("");
    } else {
      setError(result.message || "");
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
