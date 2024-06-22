interface ModalProps {
  show: boolean;
  children?: React.ReactNode;
}

export function Modal({ show, children }: ModalProps) {
  if (!show) {
    return null;
  }
  return (
    <div className="flex justify-center absolute h-screen bg-black bg-opacity-50 z-10 top-0 left-0 right-0 bottom-0">
      {children}
    </div>
  );
}
