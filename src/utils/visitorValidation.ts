import { Visitor, ValidationResult } from "../types/visitorTypes";

export function validateVisitor(username: string, password: string): ValidationResult {
  const visitors: Visitor[] = [
    {
      username: "alejandra.m",
      password: "verde123",
      fullName: "Alejandra Morales",
      ticketNumber: "00123",
    },
    {
      username: "david.p",
      password: "bosque456",
      fullName: "David Pérez",
      ticketNumber: "00124",
    },
    {
      username: "lucia.r",
      password: "eco789",
      fullName: "Lucía Ramírez",
      ticketNumber: "00125",
    },
  ];

  const visitor = visitors.find(
    (v) => v.username === username && v.password === password
  );

  if (visitor) {
    return { success: true, data: visitor };
  } else {
    return { success: false, message: "Usuario o contraseña incorrectos." };
  }
}