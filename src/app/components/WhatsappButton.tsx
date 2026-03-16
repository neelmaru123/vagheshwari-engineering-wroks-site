
import { WhatsappIcon } from "./WhatsappIcon";

export const WhatsappButton = () => {
  const phoneNumber = "9879277425"; // Add country code for international format
  const message = "Hello, I'm interested in your brick making machines.";
  
  const handleWhatsappClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <button 
      onClick={handleWhatsappClick} 
      className="fixed bottom-4 md:bottom-6 right-4 md:right-6 z-40 bg-green-500 hover:bg-green-600 text-white p-2 md:p-3 rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110"
      aria-label="Contact on WhatsApp"
    >
      <WhatsappIcon />
    </button>
  );
};
