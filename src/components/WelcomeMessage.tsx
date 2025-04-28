interface Visitor {
  fullName: string;
  ticketNumber: string;
}

export default function WelcomeMessage({ visitor }: { visitor: Visitor }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-100 text-center">
      <h1 className="text-4xl font-bold text-green-700 mb-4">
        Bienvenido, {visitor.fullName}
      </h1>
      <p className="text-lg text-gray-700">
        Disfruta tu experiencia en GreenPark.
      </p>
      <p className="text-sm text-gray-500 mt-2">
        Número de boleto: {visitor.ticketNumber}
      </p>
    </div>
  );
}