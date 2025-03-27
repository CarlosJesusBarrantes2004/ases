import Link from "next/link";
import { ChevronRight } from "lucide-react";
import React from "react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  currentPage: string;
}

function Breadcrumb({ items, currentPage }: BreadcrumbProps) {
  return (
    <div className="container mx-auto">
      <p className="flex flex-wrap items-center gap-y-1 text-gray-dark text-base md:text-lg">
        {items.map((item, index) => (
          <React.Fragment key={index}>
            {item.href ? (
              <Link
                href={item.href}
                className="flex items-center group hover:text-red-primary transition-all duration-300"
              >
                <span>{item.label}</span>
                <ChevronRight className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-all" />
              </Link>
            ) : (
              <span>{item.label}</span>
            )}
            {index < items.length - 1 && (
              <span className="text-gray-light mx-2">/</span>
            )}
          </React.Fragment>
        ))}
        <span className="text-gray-light mx-2">/</span>
        <span className="font-medium">{currentPage}</span>
      </p>
    </div>
  );
}

export default Breadcrumb;
