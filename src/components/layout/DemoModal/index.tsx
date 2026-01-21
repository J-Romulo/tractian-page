"use client";
import {
  useState,
  ReactElement,
  MouseEvent,
  useRef,
  cloneElement,
} from "react";
import { useTranslations } from "next-intl";
import Modal from "../../ui/Modal";
import DemoForm from "./form";

interface TriggerProps {
  onClick?: (e: MouseEvent) => void;
}

interface DemoModalProps {
  trigger: ReactElement<TriggerProps>;
}

export default function DemoModal({ trigger }: DemoModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const i18n = useTranslations();
  const triggerWrapperRef = useRef<HTMLDivElement>(null);

  const handleOpen = (e: MouseEvent) => {
    trigger.props.onClick?.(e);
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    triggerWrapperRef.current?.focus(); // restore focus to wrapper
  };

  return (
    <>
      <div ref={triggerWrapperRef} tabIndex={-1}>
        {cloneElement(trigger, { onClick: handleOpen })}
      </div>

      <Modal isOpen={isOpen} onClose={handleClose}>
        <article className="mb-6 flex flex-col gap-y-1 px-5 text-center">
          <h2
            id="demo-modal-title"
            className="font-mono text-[20px] md:text-[32px] font-semibold text-text-dark"
          >
            {i18n("demo-modal.title")}
          </h2>
          <h3 className="text-slate-500 text-[14px] md:text-[16px] text-body-sm md:text-body-md">
            {i18n("demo-modal.description")}
          </h3>
        </article>

        <DemoForm onSuccess={handleClose} />
      </Modal>
    </>
  );
}
