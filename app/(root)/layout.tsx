
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className ="flex h-screen flex-col">
      <Nav />
      <main className = "flex-1">{children}</main>
      <Footer />
    </div>
    
  );
}