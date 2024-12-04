"use client"
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";
import Container from "@/components/Container/Container";
import { TabProvider } from "./contexts/TabContext";
import { NavBar } from "@/components/Navbar/Navbar";
import Footer from "./footer";
// import { Analytics } from "@vercel/analytics/react"
import React, { useEffect } from 'react';
import AOS from 'aos';

// import dynamic from "next/dynamic";


const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          type="image/png"
          sizes="any"
          href="/favicon.ico"
        />
      </head>

      <body className={`${inter.className} bg-[#1b2316]`}   >

        <Container >
          <NavBar />
          
          <NextUIProvider>
            {children}
          </NextUIProvider>
        
          <Footer />
          {/* <Analytics/> */}
          {/* <DynamicCookie /> */}
        </Container>
      </body>


    </html>
  );
}
