import Link from 'next/link';

function Navbar() {
  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/"  className="text-white font-bold text-xl">Cupping Page
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline">
                
               
                <Link href="/cuppings" className="px-3 py-2 rounded-md text-sm font-medium text-white hover:text-gray-300">cuppings
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;