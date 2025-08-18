import { useEffect, useState } from "react";
import BookingModal from "@/components/BookingModal";

const GlobalBookingModal = () => {
  const [open, setOpen] = useState(false);
  const [selectedPsychologist, setSelectedPsychologist] = useState<string>("");

  useEffect(() => {
    const handleOpen = () => setOpen(true);
    const handleOpenWith = (e: Event) => {
      const custom = e as CustomEvent;
      const name = custom.detail?.name as string | undefined;
      if (name) setSelectedPsychologist(name);
      setOpen(true);
    };

    window.addEventListener("openBookingModal", handleOpen as EventListener);
    window.addEventListener("openBookingWithPsychologist", handleOpenWith as EventListener);
    return () => {
      window.removeEventListener("openBookingModal", handleOpen as EventListener);
      window.removeEventListener("openBookingWithPsychologist", handleOpenWith as EventListener);
    };
  }, []);

  return (
    <BookingModal 
      isOpen={open}
      onClose={() => setOpen(false)}
      selectedPsychologist={selectedPsychologist}
    />
  );
};

export default GlobalBookingModal;
