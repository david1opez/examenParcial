export interface Visitor {
  username: string;
  password: string;
  fullName: string;
  ticketNumber: string;
}

export interface ValidationResult {
  success: boolean;
  data?: Visitor;
  message?: string;
}

export interface VisitorFormProps {
    username: string;
    setUsername: (value: string) => void;
    password: string;
    setPassword: (value: string) => void;
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    error: string;
}