import React from "react";

const Modal = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm">
        <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto m-4 animate-pulse zoom-95">
          <button className="absolute top-4 right-4 z-10 bg-zinc-100 ">
            {" "}
            X{" "}
          </button>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
