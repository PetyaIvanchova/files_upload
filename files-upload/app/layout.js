import { Inter } from "next/font/google";
import "@/assets/styles/globals.css";
import AuthProvider from "@/components/AuthProvider";
import { ParentFolderIdProvider } from "@/context/ParentFolderIdContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Files_upload",
  description: "Upload your files",
};

export default function RootLayout({ children }) {
  return (
    <ParentFolderIdProvider>
      <AuthProvider>
        <html lang="en">
          <body className={inter.className}>
            <div className="bg-gray-100 min-h-screen">{children}</div>
          </body>
        </html>
      </AuthProvider>
    </ParentFolderIdProvider>
  );
}
