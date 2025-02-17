"use client";
import {
  Dialog,
  DialogContent,
  DialogOverlay,
} from "@/components/ui/dialog";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

export function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const currentRoute = usePathname(); // Get the current route
  const [isOpen, setIsOpen] = useState(true); // Track modal open state

  const handleOpenChange = (open: boolean) => {
    if (currentRoute !== "/auth") {
      // Close the modal when the route is not "/auth"
      setIsOpen(false); // This will close the modal
    } else {
      // Navigate back when route is "/auth"
      if (!open) {
        router.back();
      }
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
}
