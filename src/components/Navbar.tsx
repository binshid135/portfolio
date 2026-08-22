"use client";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";

const links = [{ label: "About", href: "#about" }, { label: "Services", href: "#experience" }, { label: "Projects", href: "#projects" }, { label: "Process", href: "#experience" }, { label: "Testimonials", href: "#projects" }, { label: "Contact", href: "#contact" }];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return <nav className="section-shell sticky top-0 z-40 flex items-center justify-between bg-[#fbfbf5]/95 py-5 backdrop-blur-sm md:py-8">
    <a href="#about" className="display text-[1.32rem] font-extrabold leading-[.92]">Ahammed<br />Binsid<span className="text-[#9cc23a]">.</span></a>
    <div className="hidden items-center gap-8 text-sm font-medium lg:flex">{links.map(link => <a key={link.label} className="transition hover:text-[#779516]" href={link.href}>{link.label}</a>)}</div>
    <div className="hidden items-center gap-5 lg:flex"><a aria-label="LinkedIn" href="https://in.linkedin.com/in/ahammed-binsid"><FontAwesomeIcon icon={faLinkedinIn} /></a><a aria-label="GitHub" href="https://github.com/binshid135"><FontAwesomeIcon icon={faGithub} /></a><a className="nav-talk rounded-lg bg-[#111217] px-5 py-3 text-sm font-semibold transition hover:bg-[#739414]" href="mailto:ahmedbinshid@gmail.com">Let&apos;s Talk&nbsp; ↗</a></div>
    <button onClick={() => setOpen(!open)} className="rounded-md border border-black px-3 py-2 text-sm font-bold lg:hidden" aria-label="Toggle navigation">Menu</button>
    {open && <div className="absolute right-0 top-[76px] z-30 flex w-52 flex-col gap-4 rounded-xl border border-black/10 bg-white p-5 shadow-xl lg:hidden">{links.map(link => <a key={link.label} onClick={() => setOpen(false)} href={link.href}>{link.label}</a>)}<a href="mailto:ahmedbinshid@gmail.com">Let&apos;s Talk ↗</a></div>}
  </nav>;
}
