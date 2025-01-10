import { ReactNode } from "react";
import { Toaster } from "react-hot-toast";

interface ToasterContext {
  children: ReactNode;
}

export default function ToasterProvider({ children }: ToasterContext) {
  return (
    <>
      {children}
      <Toaster
        position="bottom-center"
        reverseOrder={false}
        toastOptions={{
          duration: 4000,
          style: {
            background: "#444",
            color: "#fff",
          },
          success: {
            duration: 3000,
            style: {
              background: "green",
              color: "white",
            },
          },
          error: {
            duration: 5000,
            style: {
              background: "red",
              color: "white",
            },
          },
        }}
      />
    </>
  );
}
