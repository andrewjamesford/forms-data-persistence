
const Header = () => {
  return (
    <>
      <header className="flex items-center justify-between h-16 px-4 border-b bg-white">
				<div className="flex items-center space-x-4">
					<img src="/placeholder.svg" alt="Logo" className="h-8" />
					<nav className="hidden space-x-4 md:flex">
						<a href="/" className="text-sm font-medium text-gray-700">
							Trade Me
						</a>
						<a href="/" className="text-sm font-medium text-gray-700">
							Trade Me Insurance
						</a>
						<a href="/" className="text-sm font-medium text-gray-700">
							Holiday Houses
						</a>
						<a href="/" className="text-sm font-medium text-gray-700">
							FindSomeone
						</a>
						<a href="/" className="text-sm font-medium text-gray-700">
							MotorWeb
						</a>
						<a href="/" className="text-sm font-medium text-gray-700">
							homes.co.nz
						</a>
					</nav>
				</div>
				<div className="flex items-center space-x-4">
					<a href="/" className="text-sm font-medium text-gray-700">
						Watchlist
					</a>
					<a href="/" className="text-sm font-medium text-gray-700">
						Favourites
					</a>
					<a href="/" className="text-sm font-medium text-gray-700">
						Start a listing
					</a>
					<a href="/" className="text-sm font-medium text-gray-700">
						My Trade Me
					</a>
					<Avatar>
						<AvatarImage src="/placeholder-user.jpg" />
						<AvatarFallback>A</AvatarFallback>
					</Avatar>
					<a href="/" className="text-sm font-medium text-gray-700">
						Log out
					</a>
				</div>
        {/* <nav className={`nav page-padding`}>
          <div className="menu">
            <img src="./img/menu_black_24dp.svg" alt="menu" />
          </div>
          <ul className="rightLinks">
            <li className="rightLinkItems">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? `link activeLink` : `link`
                }
              >
                Products
              </NavLink>
            </li>
            <li className="rightLinkItems">
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  isActive ? `link activeLink` : `link`
                }
              >
                Dashboard
              </NavLink>
            </li>

          </ul>
        </nav> */}
      </header>

    </>
  );
};

export default Header;
