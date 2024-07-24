"use client";

import dynamic from "next/dynamic";
import { Context, SidebarContext } from "./(context)/ContactContext";

export default function Home() {
  const Navbar = dynamic(() => import("./(component)/Navbar"));
  const Contacts = dynamic(() => import("./(pages)/Contacts"));
  return (
    <main>
      <Navbar />
      <Contacts />
    </main>
  );
}
