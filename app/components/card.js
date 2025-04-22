import Image from "next/image";

export default function Card({ title, description, image, onClick }) {
  return (
    <div
      className="bg-white border border-red-500 rounded-lg shadow-md p-4 max-w-xs hover:cursor-pointer hover:shadow-lg transition-shadow duration-300 ease-in-out"
      onClick={onClick} // Ensure the onClick handler is applied here
    >
      <Image
        className="rounded-t-lg"
        src={image}
        alt={title}
        width={500}
        height={700}
      />
      <h2 className="text-red-600 font-bold text-lg mt-2">{title}</h2>
      <p className="text-gray-700 mt-1">{description}</p>
    </div>
  );
}