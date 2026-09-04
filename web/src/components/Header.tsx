"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { brand, navLinks } from "@/lib/content";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("nav-open", open);
    return () => document.body.classList.remove("nav-open");
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  if (pathname === "/start") return null;

  return (
    <>
      <header
        className="sticky top-0 z-50 border-b-[0.5px] border-mist bg-white"
        style={{ paddingTop: "env(safe-area-inset-top, 0px)" }}
      >
        <div className="shell relative z-20 flex h-14 items-center justify-between gap-3 sm:h-16">
          <Link
            href="/"
            className="inline-flex shrink-0 items-center gap-2.5"
            aria-label={`${brand.displayName} home`}
            onClick={() => setOpen(false)}
          >
            <span className="relative h-8 w-8 overflow-hidden rounded-[5px] sm:h-9 sm:w-9">
              <Image
                src="/brand/Novimid_ICON-DARK.svg"
                alt=""
                fill
                className="object-contain"
                priority
                sizes="36px"
              />
            </span>
            <span className="font-[family-name:var(--font-dm-sans)] text-[1.15rem] font-medium tracking-[-0.02em] text-midnight sm:text-[1.25rem]">
              {brand.displayName}
            </span>
          </Link>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[14px] font-light transition-colors hover:text-sage ${
                  pathname === link.href ? "text-sage" : "text-midnight"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              href="/start"
              className="inline-flex h-10 items-center justify-center rounded-[4px] bg-sage px-4 text-[13px] font-light text-white transition-colors hover:bg-sage-mid sm:h-11 sm:rounded-full sm:px-5 sm:text-[14px]"
            >
              Get started
            </Link>
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border-[0.5px] border-mist text-midnight transition-colors hover:bg-cloud lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
            >
              <span className="relative block h-4 w-4" aria-hidden>
                <span
                  className={`absolute left-0 block h-[1.5px] w-4 bg-midnight transition-transform duration-300 ${
                    open ? "top-[7px] rotate-45" : "top-[1px]"
                  }`}
                />
                <span
                  className={`absolute left-0 top-[7px] block h-[1.5px] w-4 bg-midnight transition-opacity duration-200 ${
                    open ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`absolute left-0 block h-[1.5px] w-4 bg-midnight transition-transform duration-300 ${
                    open ? "top-[7px] -rotate-45" : "top-[13px]"
                  }`}
                />
              </span>
            </button>
          </div>
        </div>

        {open ? (
          <div
            id="mobile-nav"
            className="relative z-20 border-b-[0.5px] border-mist bg-white lg:hidden"
          >
            <nav className="shell flex flex-col py-3" aria-label="Mobile">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`flex min-h-11 items-center px-1 text-[15px] font-light transition-colors ${
                      isActive ? "text-sage" : "text-midnight hover:text-sage"
                    }`}
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                );
              })}

              <div className="mt-3 border-t-[0.5px] border-mist pt-3">
                <Link
                  href="/start"
                  className="flex h-11 w-full items-center justify-center rounded-full bg-sage text-[14px] font-light text-white"
                  onClick={() => setOpen(false)}
                >
                  Start your protocol
                </Link>
              </div>
            </nav>
          </div>
        ) : null}
      </header>

      {open ? (
        <button
          type="button"
          className="fixed inset-0 z-40 bg-midnight/30 lg:hidden"
          style={{ top: "calc(3.5rem + env(safe-area-inset-top, 0px))" }}
          aria-label="Dismiss menu"
          onClick={() => setOpen(false)}
        />
      ) : null}
    </>
  );
}
