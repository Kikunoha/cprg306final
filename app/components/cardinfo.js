import Image from "next/image";

export default function CardInfo({ title, description, image }) {
  return (
    <div className="bg-white border border-red-500 rounded-lg shadow-md p-4 max-w-lg">
      <div className="flex flex-col items-center">
        {/* Image at the top */}
        <Image
          className="rounded-lg mb-4 w-70 h-90"
          src={image}
          alt={title}
          width={500}
          height={700}
        />
        {/* Text below the image */}
        <h2 className="text-red-600 font-bold text-lg text-center">{title}</h2>
        <p className="text-gray-700 mt-2 text-center">{description}</p>
      </div>
    </div>
  );
}