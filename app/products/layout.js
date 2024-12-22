export default function ProductLayout({ children }) {
    return (
      <div>
        <header className="bg-gray-100 p-4">
          <h1 className="text-center text-xl font-bold">Product Details</h1>
        </header>
        <main>{children}</main>
      </div>
    );
  }
  