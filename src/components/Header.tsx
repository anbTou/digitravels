import { Link, useLocation, useNavigate } from "react-router-dom";
import { DigiTravelLogo } from "@/components/DigiTravelLogo";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
export const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const handleLogoClick = () => {
    window.open('https://booking.digitravels.io', '_blank');
  };
  return <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          <DigiTravelLogo className="w-32" onClick={handleLogoClick} />
          
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link to="/">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()} active={location.pathname === "/"}>\Home</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <Link to="/subscription">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()} active={location.pathname === "/subscription"}>
                    Subscription
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <Link to="/best-deals">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()} active={location.pathname === "/best-deals"}>
                    Best Deals
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <Link to="/about">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()} active={location.pathname === "/about"}>
                    About Us
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <Link to="/contact">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()} active={location.pathname === "/contact"}>
                    Contact Us
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </header>;
};