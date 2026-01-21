import { X } from "lucide-react";
import { ReactNode, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      modalRef.current?.focus();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-y-auto p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="demo-modal-title"
      ref={modalRef}
      tabIndex={-1}
    >
      <div
        className="fixed inset-0 bg-slate-900/70"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="relative z-10 w-full max-w-[640px] lg:max-w-[768px] bg-slate-50 rounded-[1px] shadow-xl px-6 py-8 md:px-16 lg:py-11">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-10 p-1 text-slate-500 hover:text-slate-700 transition-colors"
          aria-label="Close modal"
        >
          <X className="size-5" />
        </button>

        <div className="w-full">{children}</div>
      </div>
    </div>,
    document.body,
  );
}
