import React, { useState, useEffect } from "react";
import CustomButton from "./CustomButton";
import FindUsModal from "./FindUsModal";
import Switchers from "./Switchers";
import LoginModal from "./LoginModal";
import ProductsModal from "./ProductsModal";
import Login from "./Login";
import PlanCard from "./PlanCard";
import { useSession } from 'next-auth/react';
import OverviewModal from "./OverviewModal";
import ContactForm from "./ContactForm";





const ClockIcon = () => {
  return (
<svg class="h-5 w-5 text-gray-400 ml-3"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="12" cy="12" r="9" />  <polyline points="12 7 12 12 15 15" /></svg>
  );
};

function Header() {
  const [showFindUsModal, setShowFindUsModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showProductsModal, setShowProductsModal] = useState(false);
  const [showOverviewModal, setShowOverviewModal] = useState(false);




  const toggleOverviewModal = () => {
    setShowOverviewModal(!showOverviewModal);
    setShowMenu(false); // Close the menu when opening the OverviewModal
  };

  const toggleFindUsModal = () => {
    setShowFindUsModal(!showFindUsModal);
    setShowMenu(false); // Close the menu when opening the FindUsModal
  };

  const toggleProductsModal = () => {
    setShowProductsModal(!showProductsModal); 
  };
  

  const toggleLoginModal = () => {
    setShowLoginModal(!showLoginModal);
    setShowMenu(false); // Close the menu when opening the LoginModal
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const { data: session } = useSession();

  useEffect(() => {
    setIsAuthenticated(!!session?.user);
    if (session?.user) {
      const userEmail = session.user.email;

      // Make an API call to save the user's email using fetch
    
        fetch("http://localhost:3001/api/save-email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: userEmail }),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data.message); // Print the response message
          })
          .catch((error) => {
            console.error("Error saving user email:", error);
          });

    }
  }, [session]);
  const [isCollapsed, setIsCollapsed] = useState(true);

  

  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="w-full lg:h-16 h-24 z-[100] flex justify-center fixed top-0">
      <div
        id="header_sub"
        className="lg:w-[70%] w-full px-4 h-full pt-2 flex items-center border-b border-b-[#3D3D3D]"
      >
        <div className="w-1/2 h-full flex items-center justify-start">
          <img src="/images/logo.png" style={{ width: "177px", height: "60px" }} />
        </div>
        <div>
          {/* Display user email and name if authenticated */}
          {session?.user && (
            <div className="lg:flex">
              <p className="text-xs px-3 py-1 text-[#ffffff] lg:py-0 lg:px-0 lg:w-auto md:w-1/2 sm:w-full">
                {session.user.email}
              </p>
            </div>
          )}
        </div>
   
        <div className="w-1/2 h-full flex items-center justify-end">
          {/* SVG for the collapsible menu */}
          
          <svg
            className="h-6 w-6 text-white lg:hidden cursor-pointer mr-4"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            onClick={toggleMenu}
          >
            <path stroke="none" d="M0 0h24v24H0z" />
            <line x1="4" y1="6" x2="20" y2="6" />
            <line x1="4" y1="12" x2="20" y2="12" />
            <line x1="4" y1="18" x2="20" y2="18" />
          </svg>

          {/* Collapsible menu */}
          {showMenu && (
            <ul className="lg:hidden text-[#D0D1D1] flex flex-col absolute right-0 top-12 bg-[#2B2C34] rounded border-t-[#3D3D3D] mr-4 mt-9 w-[250px] h-[220px]">
              <div className="mt-7">

              <li>
              <button onClick={toggleOverviewModal}  className="text-xs px-3 py-1 text-[#ffffff] hover:text-[#a8bbcf]" style={{ fontSize: '20px', display: 'flex', alignItems: 'center' }}>
              <svg className="h-4 w-4 text-white mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
              </svg>
              Overview
            </button>
              </li>
              <br/>
              {isAuthenticated && (
              <li>
                <button onClick={toggleProductsModal} className="text-xs px-3 py-1 hover:text-[#a8bbcf] cursor-pointer" style={{ fontSize: '20px', display: 'flex', alignItems: 'center' }}>
                  <svg className={`h-4 w-4 mr-2 ${session?.user ? 'text-white' : 'text-gray-400'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                  Products
                </button>
              </li>
            )}
              <br/>
              {isAuthenticated && (
              <li>
              <button onClick={toggleFindUsModal} className="text-xs px-3 py-1 hover:text-[#959ba1] cursor-pointer" style={{ fontSize: '20px', display: 'flex', alignItems: 'center' }}>
              <svg className="h-4 w-4 text-white mr-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" />
                <path d="M21 14l-3 -3h-7a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1h9a1 1 0 0 1 1 1v10" />
                <path d="M14 15v2a1 1 0 0 1 -1 1h-7l-3 3v-10a1 1 0 0 1 1 -1h2" />
              </svg>
             Discover
            </button>
              </li>
              )}
              <br/>
              <li>
                <button onClick={toggleLoginModal} className="text-xs px-3 py-1 hover:text-[#959ba1] cursor-pointer" style={{fontSize:'20px'}}>
                  Signup
                </button>
              </li>
              </div>
              
            </ul>
          )}
          
          

          {/* Regular buttons on larger screens */}
          <ul className="text-[#D0D1D1] lg:flex hidden">
              
       
            <li>
              <button onClick={toggleOverviewModal} className="text-xs px-3 py-1 text-[#ffffff] hover:text-[#a8bbcf]">
                Overview
              </button>
            </li>
            {isAuthenticated && (
            <li>
              <button onClick={toggleProductsModal} className="text-xs px-3 py-1 hover:text-[#a8bbcf] cursor-pointer">
                Products
              </button>
            </li>
            )}
            {isAuthenticated && (
            <li>
              <button onClick={toggleFindUsModal} className="text-xs px-3 py-1 hover:text-[#959ba1] cursor-pointer">
                Discover
              </button>
            </li>
            )}
            <li>
              <button onClick={toggleLoginModal} className="text-xs px-3 py-1 hover:text-[#959ba1] cursor-pointer">
                Signup
              </button>
            </li>
          </ul>


          <CustomButton />

           {/* OverviewModal */}
           {showOverviewModal && (
            <OverviewModal
              isVisible={showOverviewModal}
              onClose={() => setShowOverviewModal(false)}
            >
              <img className="mt-[-3.5rem] ml-[-2rem]" src="/images/xcelero3.png" alt="logo3" style={{height:'200px'}}></img>
              <div>
                <p className="font-medium text-black mt-[-5rem] ml-5" style={{textAlign:'left'}}>        
              Xcelero, the architects of digital transformation, 
              stand at the forefront of revolutionizing businesses through 
              cutting-edge technology infrastructure. Our mission is to empower 
              companies by crafting robust and scalable digital foundations that 
              fuel innovation and drive success. We understand that in today's 
              fast-paced world, a strong tech infrastructure is essential for 
              sustained growth. At Xcelero, we offer a comprehensive suite of 
              services tailored to meet the unique needs of each client, ensuring
              that their digital journey is smooth, secure, and efficient. However, 
              the keys to this technological wonderland are exclusive – accessible 
              only through a simple and seamless sign-up process. We believe in the
              power of collaboration and are excited to join hands with visionary 
              businesses ready to embrace the future. Unleash the potential of your
              business with Xcelero, where innovation meets infrastructure, and the
              possibilities are limitless.
                </p>
              </div>
            </OverviewModal>
          )}

          {/* FindUsModal */}
          {showFindUsModal && (
            <FindUsModal
              isVisible={showFindUsModal}
              onClose={() => setShowFindUsModal(false)}
            >
              <div className="flex items-center">
                <ClockIcon />
                <h3 className="text-black ml-2">Business Hours</h3>
              </div>
             
              <div>
                <br />
                <Switchers />
              </div>
              <br/>
              <div>
              <ContactForm/>
              </div>
            </FindUsModal>
          )}
           {/* ProductsModal */}
           {showProductsModal && (
            <ProductsModal 
            isVisible={showProductsModal}
            onClose={() => setShowProductsModal(false)}
            >
            <PlanCard/>
            <br/>
            <div>
              <p className="text-[#3C6E71] ml-3 text-sm">Digital Portfolios @4500ksh</p>
            </div>
            <div className="text-[#4A4E69] ml-3 text-sm">
            <p> For more information email at Xcelero001@gmail.com </p>
            </div>
            </ProductsModal>
           )}

          {/* LoginModal */}
          {showLoginModal && (
            <LoginModal
              isVisible={showLoginModal}
              onClose={() => setShowLoginModal(false)}
            >
              <div className="flex items-center">
                <img
                  src="/images/logo.png"
                  style={{ width: "177px", height: "60px", position: "relative", left: "8.8rem" }}
                />
                <Login />
              </div>
              <div>
                
              </div>
            </LoginModal>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;

