"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function PromoBanner() {
  const pathname = usePathname();
  if (pathname === "/start") return null;

  return (
    <div className="border-b-[0.5px] border-midnight/20 bg-[#DCE8DD]">
      <div className="shell flex flex-wrap items-center justify-between gap-3 py-2.5">
        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          <span className="rounded-lg border-[0.5px] border-midnight bg-white px-2.5 py-1 text-[10px] font-normal tracking-[0.06em] text-midnight uppercase">
            Physician-directed
          </span>
          <p className="text-[13px] font-light text-midnight sm:text-[14px]">
            Start your protocol ·{" "}
            <span className="rounded-full bg-sage px-2 py-0.5 text-[11px] font-normal text-white">
              California 503A
            </span>
          </p>
        </div>
        <Link
          href="/start"
          className="inline-flex h-9 items-center justify-center rounded-full border-[0.5px] border-midnight bg-white px-4 text-[13px] font-normal text-midnight"
        >
          Start your consult →
        </Link>
      </div>
    </div>
  );
}
