"use client";
import { useRouter } from 'next/navigation';
import { FaFacebook } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa6';

const Footer = () => {
  const router = useRouter();

  return (
    <>
      <div>
        <section className="relative z-20">
          {/* First div: Background image */}
          <div className="absolute w-full inset-0 flex items-center justify-center bg-gradient-to-b from-primary/10 via-primary/50 to-black/10 border-t-4 border-accent/70">
            <img
              src="/logo.svg"
              alt="Background Logo"
              className="w-full h-[140%] object-fit"
            />
          </div>

          <div className="absolute inset-0 flex items-center justify-center bg-[#1e1c1cc7] backdrop-blur-[6px]"></div>

          {/* Second div: Content */}
          <div className="relative max-w-screen-xl px-4 py-12 mx-auto space-y-8 sm:px-6 lg:px-8">
            {/* Navigation links */}
            <nav className="flex flex-wrap justify-center -mx-5 -my-2">
              <div className="px-5 py-2">
                <a
                  onClick={() => router.push('/')}
                  className="cursor-pointer text-base leading-6 text-white/80 hover:text-accent/80 transition-all duration-300"
                >
                  Home
                </a>
              </div>
              <div className="px-5 py-2">
                <a
                  onClick={() => router.push('/study')}
                  className="cursor-pointer text-base leading-6 text-white/80 hover:text-accent/80 transition-all duration-300"
                >
                  Study
                </a>
              </div>
              <div className="px-5 py-2">
                <a
                  onClick={() => router.push('/feedback')}
                  className="cursor-pointer text-base leading-6 text-white/80 hover:text-accent/80 transition-all duration-300"
                >
                  Feedback
                </a>
              </div>
              <div className="px-5 py-2">
                <a
                  onClick={() => router.push('/about_us')}
                  className="cursor-pointer text-base leading-6 text-white/80 hover:text-accent/80 transition-all duration-300"
                >
                  About
                </a>
              </div>
              <div className="px-5 py-2">
                <a
                  onClick={() => router.push('/contact_us')}
                  className="cursor-pointer text-base leading-6 text-white/80 hover:text-accent/80 transition-all duration-300"
                >
                  Contact
                </a>
              </div>
            </nav>

            {/* Social icons */}
            <div className="flex justify-center items-center mt-8 space-x-6">
              <a
                href="https://web.facebook.com/saviskara.fot"
                target="_blank"
                className="text-gray-400 hover:text-accent transition-all duration-300"
              >
                <FaFacebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.youtube.com/@Saviskara"
                target="_blank"
                className="text-gray-400 hover:text-accent transition-all duration-300"
              >
                <FaYoutube className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/company/saviskara/?viewAsMember=true"
                target="_blank"
                className="text-gray-400 hover:text-accent transition-all duration-300"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </section>

        <section className="w-full bg-primary">
          <div className="px-8 pb-4 mx-auto max-w-8xl">
            
            <div className="flex bg-red flex-col items-start justify-between pt-5 border-t border-white/10 md:flex-row md:items-center">
              <p className="cursor-default mb-6 text-sm text-center w-full text-gray-600 md:mb-0 inset-2">
                © Copyright 2025 Saviskara. All Rights Reserved.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Footer;