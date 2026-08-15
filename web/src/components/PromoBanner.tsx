"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function PromoBanner() {
  const pathname = usePathname();
  if (pathname === "/start") return null;

  return (
    <div className="border-b-[0.5px] border-midnight/15 bg-[#DCE8DD]">
      <div className="shell flex items-center justify-between gap-3 py-2">
        <p className="min-w-0 truncate text-[13px] font-light text-midnight sm:text-[14px]">
          Physician-directed care · California 503A compounding
        </p>
        <Link
          href="/start"
          className="inline-flex h-8 shrink-0 items-center justify-center rounded-full border-[0.5px] border-midnight bg-white px-3.5 text-[12px] font-normal text-midnight transition-colors hover:bg-cloud sm:h-9 sm:px-4 sm:text-[13px]"
        >
          Start your consult →
        </Link>
      </div>
    </div>
  );
}
