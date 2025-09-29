import { useEffect, useState } from "react";

import ContactModal from "@/components/ContactModal/ContactModal";

const GlobalContactModal = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleOpen = () => setOpen(true);

    window.addEventListener("openContactModal", handleOpen as EventListener);
    
    return () => {
      window.removeEventListener("openContactModal", handleOpen as EventListener);
    };
  }, []);

  return (
    <ContactModal
      isOpen={open}
      onClose={() => setOpen(false)}
    />
  );
};

export default GlobalContactModal;