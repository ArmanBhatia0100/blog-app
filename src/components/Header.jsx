import { Link } from "react-router-dom";

const Header = ({ children }) => {
  // Get input value of the searchbar from the ref

  return (
    <header className="flex justify-between items-center bg-slate-100 shadow-md px-6 py-4">
      <h1 className="font-bold text-blue-600 text-2xl">EnjoX</h1>
      <div className="flex items-center space-x-4">{children}</div>
    </header>
  );
};

Header.CreateButton = () => {
  return (
    <Link to="/createpost">
      <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-full text-white transition duration-200">
        Create Post
      </button>
    </Link>
  );
};

export default Header;
