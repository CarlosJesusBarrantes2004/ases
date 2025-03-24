import { FaWhatsapp } from "react-icons/fa";

function BtnWhatsapp() {
  return (
    <a
      href="https://wa.me/944668448"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 bg-[#25D366] text-white p-4 rounded-full shadow-lg flex items-center justify-center hover:bg-[#1EBE52] hover:-translate-y-2 transition duration-300 z-50"
    >
      <FaWhatsapp size={32}></FaWhatsapp>
    </a>
  );
}

export default BtnWhatsapp;
