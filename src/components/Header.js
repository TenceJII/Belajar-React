import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import image from "assets/image/Mr.bear.jpg";
import LoginPage from "pages/login";

export const Header = ({ links }) => {
  const [diOpen, seKeOpen] = useState(false);
  const bukaNavbar = (val) => {
    console.log(val);
    seKeOpen(val);
  };
  const tutupNavbar = (val) => {
    console.log(val);
    seKeOpen(val);
  };

  const [isOpen, seIsOpen] = useState(false);
  const handleNavbar = (val) => {
    console.log(val); // nilai diconsole log false dari useState(false) tpi kenapa return false karena di handleNavbar(!isOpen) dibawah yang artinya isOpen == true
    seIsOpen(val); // merubah nilai isOpen menjadi true dari data val di atas
  };

  const [onOpen, seOnOpen] = useState(false);
  const dropDown = (val) => {
    console.log(val);
    seOnOpen(val);
  };
  const [textColor, setTextColor] = useState("text-white");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        // Ubah angka sesuai dengan posisi scroll yang Anda inginkan
        setTextColor("text-black"); // Ganti warna teks menjadi hitam
      } else {
        setTextColor("text-white"); // Kembalikan warna teks ke putih
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return <header></header>;
};
