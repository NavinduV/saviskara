'use client';
import { useRouter, usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { HiExternalLink } from 'react-icons/hi';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const isActive = (route) => pathname === route;

  // Motions
  const mobLinkVariants = {
    open: {
      x: 0,
      opacity: 1,
    },
    closed: {
      x: 20,
      opacity: 0,
    },
  };
  
  const sidebarVariants = {
    open: {
      clipPath: 'circle(1200px at 50px 50px)',
      transition: {
        type: 'spring',
        stiffness: 20,
      },
    },
    closed: {
      clipPath: 'circle(30px at 270px -40px)',
      transition: {
        delay: 0.2,
        type: 'spring',
        stiffness: 400,
        damping: 40,
      },
    },
  };

  const desktopLinkVariants = {
    hidden: {
      y: -80,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative">
      <nav
        className={`p-4 shadow-md ${
          isScrolled ? 'bg-[#1e1c1cc2] backdrop-blur-sm' : 'bg-[#1E1C1C]'
        }`}
      >
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <motion.div
            className="flex items-center"
            initial={{ opacity: 0, scale: 0.2 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <a
              onClick={() => router.push('/')}
              className="text-white cursor-pointer text-lg font-bold"
            >
              <img width={100} src="/logo.svg" alt="Logo" />
            </a>
          </motion.div>

          {/* Navbar Links (Hidden on small screens) */}
          <motion.div className="menu md:flex hidden items-center justify-center gap-5 lg:gap-10">
            <motion.a
              variants={desktopLinkVariants}
              initial="hidden"
              animate="visible"
              onClick={() => router.push('/')}
              className={`block cursor-pointer transition-all duration-300 ${
                isActive('/') ? 'active-link' : 'menu-link'
              }`}
            >
              Home
            </motion.a>
            <motion.a
              variants={desktopLinkVariants}
              initial="hidden"
              animate="visible"
              onClick={() => router.push('/study')}
              className={`block cursor-pointer transition-all duration-300 ${
                isActive('/study') ? 'active-link' : 'menu-link'
              }`}
            >
              Study
            </motion.a>
            <motion.a
              variants={desktopLinkVariants}
              initial="hidden"
              animate="visible"
              href="https://fotusj.blogspot.com"
              target="_blank"
              className={`flex gap-1 items-center cursor-pointer transition-all duration-300 group ${
                isActive('') ? 'active-link' : 'menu-link'
              }`}
            >
              Blog
              <HiExternalLink className="text-[16px] group-hover:text-accent group-hover:scale-110 transition-all duration-300" />
            </motion.a>
            <motion.a
              variants={desktopLinkVariants}
              initial="hidden"
              animate="visible"
              onClick={() => router.push('/about_us')}
              className={`block cursor-pointer transition-all duration-300 ${
                isActive('/about_us') ? 'active-link' : 'menu-link'
              }`}
            >
              About Us
            </motion.a>
            <motion.a
              variants={desktopLinkVariants}
              initial="hidden"
              animate="visible"
              onClick={() => router.push('/contact_us')}
              className={`block cursor-pointer transition-all duration-300 ${
                isActive('/contact_us') ? 'active-link' : 'menu-link'
              }`}
            >
              Contact Us
            </motion.a>
            <motion.a
              variants={desktopLinkVariants}
              initial="hidden"
              animate="visible"
              onClick={() => router.push('/feedback')}
              className={`block cursor-pointer transition-all duration-300 ${
                isActive('/feedback') ? 'active-link' : 'menu-link'
              }`}
            >
              Feedback
            </motion.a>
            <motion.button
              variants={desktopLinkVariants}
              initial="hidden"
              animate="visible"
              className="anim-btn anim-btn--changeGradient font-semibold rounded-lg p-2 whitespace-nowrap transition-all duration-500 px-4"
            >
              Download App
            </motion.button>
          </motion.div>

          {/* Mobile Menu Button (Visible on small screens) */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
              className="cursor-pointer focus:outline-none"
            >
              <svg width="21px" height="21px" viewBox="0 0 23 23">
                <motion.path
                  strokeWidth="3"
                  stroke="#fafafa"
                  strokeLinecap="round"
                  animate={isMobileMenuOpen ? 'open' : 'closed'}
                  initial="closed"
                  variants={{
                    closed: { d: 'M 2 2.5 L 20 2.5' },
                    open: { d: 'M 3 16.5 L 17 2.5' },
                  }}
                />
                <motion.path
                  strokeWidth="3"
                  stroke="#fafafa"
                  strokeLinecap="round"
                  initial={{ opacity: 1 }}
                  animate={isMobileMenuOpen ? 'open' : 'closed'}
                  d="M 2 9.423 L 20 9.423"
                  variants={{
                    closed: { opacity: 1 },
                    open: { opacity: 0 },
                  }}
                />
                <motion.path
                  strokeWidth="3"
                  stroke="#fafafa"
                  strokeLinecap="round"
                  initial="closed"
                  animate={isMobileMenuOpen ? 'open' : 'closed'}
                  variants={{
                    closed: { d: 'M 2 16.346 L 20 16.346' },
                    open: { d: 'M 3 2.5 L 17 16.346' },
                  }}
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu (Hidden by default) */}
      <motion.div
        variants={sidebarVariants}
        initial="closed"
        animate={isMobileMenuOpen ? 'open' : 'closed'}
        className="md:hidden absolute right-0"
      >
        <motion.div
          className={`transition-all duration-700 ease-in-out transform flex flex-col items-center justify-center gap-4 w-[50vw] h-[48vh] rounded-b-[20px] bg-[#1e1c1ca7] backdrop-blur-md p-2 px-4`}
        >
          <motion.a
            variants={mobLinkVariants}
            initial="closed"
            animate={isMobileMenuOpen ? 'open' : 'closed'}
            transition={{ delay: 0.02, duration: 0.05, ease: 'easeInOut' }}
            onClick={() => {
              router.push('/');
              setMobileMenuOpen(!isMobileMenuOpen);
            }}
            className={`block cursor-pointer transition-all duration-300 ${
              isActive('/')
                ? 'text-white bg-accent/90 rounded-md w-full text-center p-2'
                : 'text-white hover:text-accent'
            }`}
          >
            Home
          </motion.a>
          <motion.a
            variants={mobLinkVariants}
            initial="closed"
            animate={isMobileMenuOpen ? 'open' : 'closed'}
            transition={{ delay: 0.03, duration: 0.1, ease: 'easeInOut' }}
            onClick={() => {
              router.push('/study');
              setMobileMenuOpen(!isMobileMenuOpen);
            }}
            className={`block cursor-pointer transition-all duration-300 ${
              isActive('/study')
                ? 'text-white bg-accent/90 rounded-md w-full text-center p-2'
                : 'text-white hover:text-accent'
            }`}
          >
            Study
          </motion.a>
          <motion.a
            variants={mobLinkVariants}
            target="_blank"
            initial="closed"
            animate={isMobileMenuOpen ? 'open' : 'closed'}
            transition={{ delay: 0.04, duration: 0.15, ease: 'easeInOut' }}
            href="https://fotusj.blogspot.com"
            className="flex group text-white cursor-pointer hover:text-accent transition-all duration-300 flex-row items-center gap-1"
          >
            Blog
            <HiExternalLink className="text-[16px] group-hover:text-accent group-hover:scale-110 transition-all duration-300" />
          </motion.a>
          <motion.a
            variants={mobLinkVariants}
            initial="closed"
            animate={isMobileMenuOpen ? 'open' : 'closed'}
            transition={{ delay: 0.05, duration: 0.2, ease: 'easeInOut' }}
            onClick={() => {
              router.push('/about_us');
              setMobileMenuOpen(!isMobileMenuOpen);
            }}
            className={`block cursor-pointer transition-all duration-300 ${
              isActive('/about_us')
                ? 'text-white bg-accent/90 rounded-md w-full text-center p-2'
                : 'text-white hover:text-accent'
            }`}
          >
            About Us
          </motion.a>
          <motion.a
            variants={mobLinkVariants}
            initial="closed"
            animate={isMobileMenuOpen ? 'open' : 'closed'}
            transition={{ delay: 0.06, duration: 0.25, ease: 'easeInOut' }}
            onClick={() => {
              router.push('/contact_us');
              setMobileMenuOpen(!isMobileMenuOpen);
            }}
            className={`block cursor-pointer transition-all duration-300 ${
              isActive('/contact_us')
                ? 'text-white bg-accent/90 rounded-md w-full text-center p-2'
                : 'text-white hover:text-accent'
            }`}
          >
            Contact Us
          </motion.a>
          <motion.a
            variants={mobLinkVariants}
            initial="closed"
            animate={isMobileMenuOpen ? 'open' : 'closed'}
            transition={{ delay: 0.07, duration: 0.3, ease: 'easeInOut' }}
            onClick={() => {
              router.push('/feedback');
              setMobileMenuOpen(!isMobileMenuOpen);
            }}
            className={`block cursor-pointer transition-all duration-300 ${
              isActive('/feedback')
                ? 'text-white bg-accent/90 rounded-md w-full text-center p-2'
                : 'text-white hover:text-accent'
            }`}
          >
            Feedback
          </motion.a>
          <a href="/" className="block text-white mt-6">
            <motion.button
              variants={mobLinkVariants}
              initial="closed"
              animate={isMobileMenuOpen ? 'open' : 'closed'}
              transition={{ delay: 0.08, duration: 0.35, ease: 'easeInOut' }}
              className="anim-btn anim-btn--changeGradient font-semibold rounded-lg p-2 transition-all duration-300"
            >
              Download App
            </motion.button>
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Navbar;
