
import React from "react";
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import PageTransition from '@/components/PageTransition';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <PageTransition>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 md:p-12 rounded-xl shadow-lg max-w-md w-full text-center">
          <h1 className="text-6xl font-bold text-mutedTeal mb-6">404</h1>
          <p className="text-2xl text-deepCharcoal font-medium mb-4">Page Not Found</p>
          <p className="text-deepCharcoal/70 mb-8">
            We couldn't find the page you're looking for. It might have been moved or doesn't exist.
          </p>
          <Link 
            to="/" 
            className="inline-block bg-mutedTeal text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-all duration-300 shadow-sm"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </PageTransition>
  );
};

export default NotFound;
