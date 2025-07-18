

const Header = () => (
  <header className="flex justify-between items-center px-8 py-4 bg-white shadow">
    <h1 className="text-xl font-bold text-blue-600">EduPlatform</h1>
    <nav className="space-x-6">
      <a href="#" className="text-gray-600 hover:text-blue-600">Home</a>
      <a href="#" className="text-gray-600 hover:text-blue-600">Courses</a>
      <a href="#" className="text-gray-600 hover:text-blue-600">About</a>
    </nav>
    <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
      Contact Us
    </button>
  </header>
);
export default Header;