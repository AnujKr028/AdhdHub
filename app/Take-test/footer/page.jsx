"use client";

import Link from "next/link";


import { IBM_Plex_Sans } from "next/font/google";


const ibmSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-ibm-sans",
});

const FooterTest = () => {
  return (
    <footer className="bg-black text-gray-400 text-sm py-8 px-6 mt-10">
      <div className="max-w-5xl mx-auto flex flex-col gap-4">
        {/* Copyright */}
        <p className = {`${ibmSans.className} text-white `}>
          Copyright © <span className="font-semibold">ADHDHUB</span> 2025. All Rights Reserved.
        </p>

        {/* Disclaimer */}
        <p className= {`${ibmSans.className} leading-relaxed text-gray-400 `}>
          ADHDHUB delivers reliable information on ADHD. But ADHDHub’s content and services
          are no substitute for professional mental health or medical advice. Nor is it an
          alternative to ADHD diagnosis or treatment. Seek advice from your physician or
          qualified health provider for any medical condition.
        </p>

        {/* Links */}
        <div className={`${ibmSans.className} flex gap-6 mt-2`}>
          <Link href="#" className="hover:text-white transition">
            Privacy
          </Link>
          <Link href="/footer" className="hover:text-white transition">
            Contact ADHDHUb
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default FooterTest;
