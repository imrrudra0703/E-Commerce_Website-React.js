import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BsCart } from "react-icons/bs";
import Image from "next/image";
import { getCartItem } from "@/utils/cartitems";

function Header() {
  const [cart, setCart] = useState(0);
  useEffect(() => {
    setInterval(() => {
      const cartItems = getCartItem();
      setCart(cartItems.length);
    }, 1000);
  }, []);

  return (
    <>
      <nav className="navbar navbar-top-bg d-none d-md-block">
        <div className="container-md">
          <i className="nav-item navbar-nav">Get UpTo 70% Discount Everyday</i>
          <div className="dropdown p-0">
            <span
              className="dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              My Account
            </span>
            <ul className="dropdown-menu">
              <li>
                <Link className="dropdown-item" href="/Register">
                  Register
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" href="/login">
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <nav className="navbar navbar-top-bg">
        <div className="container-md">
          <Link href="/" className="navbar-brand">
            <Image src="/images/rudra.png" width={85} height={50} alt="logo" />
          </Link>
          <Link
            href="/cart"
            className="nav-item nav-link d-flex gap-1 align-items-center"
          >
            <span className="p-1 rounded-circle bg-danger">
              <BsCart size={21} className="pb-1" />
            </span>
            {cart} items
          </Link>
        </div>
      </nav>
      <nav class="navbar navbar-expand-lg shadow-sm mb-2 rounded container px-2">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <div class="navbar-nav">
            <Link href="/" className="nav-item nav-link active">
              <b>Store</b>
            </Link>
            <Link href="/about" className="nav-item nav-link active">
              <b>About Us</b>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
