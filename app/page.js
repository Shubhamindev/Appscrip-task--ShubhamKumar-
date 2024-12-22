import HeaderComponent from "./components/dashboard/Header";
import ProductGrid from "./components/dashboard/productCard"; // Ensure correct path to the ProductGrid component
import Footer from "./components/dashboard/Footer"; // Import Footer component

export default function Home({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Section */}
      <HeaderComponent />

      {/* Main Content */}
      <main className="flex-grow">
        <ProductGrid /> {/* Add ProductGrid here to display products */}
        {children}
      </main>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}
