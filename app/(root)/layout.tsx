import { Metadata } from "next";
import { ReactNode } from "react";
import StreamVideoProvider from "@/providers/StreamClientProvider";


export const metadata: Metadata = {
  title: "YOOM",
  description: "Next generation video calling app",
  icons: {
    icon: "/icons/logo.svg",
  }
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      <StreamVideoProvider>{children}</StreamVideoProvider>
    </main>
  );
};

export default RootLayout;
