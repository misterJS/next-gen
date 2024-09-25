import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/css";
import "swiper/css/bundle";
import "react-modal-video/css/modal-video.css";
import "react-toastify/dist/ReactToastify.css";
import "react-photo-view/dist/react-photo-view.css";

import "@/assets/css/font-awesome.min.css";
import "@/assets/css/flaticon-set.css";

import "@/assets/css/animate.min.css";
import "@/assets/css/validnavs.css";
import "@/assets/css/helper.css";
import "@/assets/css/unit-test.css";
import "@/assets/css/style.css";

import { Manrope } from "next/font/google";
import { ToastContainer } from "react-toastify";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Dependency from "@/components/utilities/Dependency";
import { Analytics } from '@vercel/analytics/react';
import Head from "next/head";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "PT Dwi Panca Ekatama | Hydraulic Torque Wrench – Dwi Panca Bolting Solutions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta
          name="keywords"
          content="flange management services, bolting service provider, hydraulic torque rental, industrial bolting solutions, torque wrench rental, flange integrity management, bolt tensioning services"
        />
        <meta
          name="description"
          content="PT Dwi Panca Ekatama adalah perusahaan yang bergerak di bidang flange management, bolting service, dan rental hydraulics torque. Kami menyediakan layanan profesional dalam mengelola flange, melakukan pemasangan baut dengan presisi tinggi, dan menyewakan alat-alat hydraulics torque yang handal. Dengan pengalaman dan pengetahuan yang luas, tim kami siap membantu Anda dalam memastikan keandalan dan keamanan sistem flange serta menjaga kinerja yang optimal. Kami berkomitmen untuk memberikan solusi yang terbaik dan memenuhi kebutuhan pelanggan kami. Hubungi PT Dwi Panca Ekatama untuk layanan terpercaya dalam flange management, bolting service, dan rental hydraulics torque."
        />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-EKMN2J6D2Y"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-EKMN2J6D2Y');
            `,
          }}
        />
        <meta
          name="google-site-verification"
          content="RTw0CicvHny68Y6t5kHljvJRe4lH5O8o4a0yXZ20Jx0"
        />
      </Head>
      <body className={`${manrope.className}`}>
        <ToastContainer />
        <Dependency />
        {children}
        <div id="modal-root-content" />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
