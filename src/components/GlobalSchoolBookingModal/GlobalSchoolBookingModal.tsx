import { useEffect, useState } from "react";

import SchoolBookingModal from "@/components/SchoolBookingModal/SchoolBookingModal";

const GlobalSchoolBookingModal = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleOpen = () => setOpen(true);

    window.addEventListener(
      "openSchoolBookingModal",
      handleOpen as EventListener
    );
    return () => {
      window.removeEventListener(
        "openSchoolBookingModal",
        handleOpen as EventListener
      );
    };
  }, []);

  return <SchoolBookingModal isOpen={open} onClose={() => setOpen(false)} />;
};

export default GlobalSchoolBookingModal;
