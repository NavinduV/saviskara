'use client';
import { Inter, Sora, Poppins, Raleway } from 'next/font/google';
import './globals.scss';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
// import { useRouter } from 'next/navigation'
// import {ProSidebarProvider} from 'react-pro-sidebar'
// const inter = Inter({ subsets: ['latin'] })

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
});

const raleway = Raleway({
  subsets: ['latin'],
  variable: '--font-raleway',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
});

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
});

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
});


const RootLayout = ({ children }) => {


  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/logo.svg" type="image/x-icon" />
        <title>Saviskara</title>
      </head>

      <body
        className={`relative flex flex-col justify-between ${raleway.variable} font-raleway`}
      >
        <div className="relative h-full bg-gradient-custom">
          {/* <div className="absolute inset-1 bg-anime">
            <div id="stars"></div>
            <div id="stars2"></div>
            <div id="stars3"></div>
          </div> */}

          <div className="sticky top-0 z-50">
            <Navbar />
          </div>

          <div className="h-full overflow-y-scroll z-30">
            <div>{children}</div>
            <Footer />
          </div>
        </div>
      </body>
    </html>
    // </ProSidebarProvider>
  );
};

export default RootLayout;
