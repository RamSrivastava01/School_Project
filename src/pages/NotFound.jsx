import { Link } from "react-router-dom";

function NotFound() {
   return (
      <section className="min-h-[60vh] flex items-center justify-center bg-[#f8fafc] px-4">
         <div className="text-center">
            <h1 className="text-5xl font-bold text-[#1e40af]">404</h1>

            <h2 className="mt-4 text-2xl font-semibold text-gray-800">
               Page Not Found
            </h2>

            <p className="mt-2 text-gray-600">
               The page you are looking for does not exist or has been moved.
            </p>

            <Link
               to="/"
               className="inline-block mt-6 bg-[#16a34a] hover:bg-[#15803d] text-white px-6 py-3 rounded-md font-medium transition"
            >
               Go Back to Home
            </Link>
         </div>
      </section>
   );
}

export default NotFound;
