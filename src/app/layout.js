import Footer from "@/components/Footer/Footer";
import "@/styles/globals.css";

export default function RootLayout({ children }) {
  return (
    <html
      lang="pt-br"
      className="h-screen antialiased"
    >
      <body className="min-h-screen">
        <main className="w-full flex flex-col items-center">
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
