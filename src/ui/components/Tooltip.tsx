"use client";
/*
 * Documentation:
 * Tooltip — https://app.subframe.com/97532459136f/library?component=Tooltip_ccebd1e9-f6ac-4737-8376-0dfacd90c9f3
 */

import React, { useState } from "react";
import * as SubframeUtils from "../utils";

interface TooltipProps {
  content: string;
  children: React.ReactElement;
  className?: string;
}

export const Tooltip: React.FC<TooltipProps> = ({ content, children, className }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div 
      className="relative inline-block"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      {isVisible && (
        <div
          className={SubframeUtils.twClassNames(
            "absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 z-50",
            "flex flex-col items-start gap-2 rounded-md border border-solid border-neutral-900 bg-neutral-800 px-2 py-1 shadow-lg",
            "whitespace-nowrap",
            className
          )}
        >
          <span className="text-caption font-caption text-white">
            {content}
          </span>
          {/* Tooltip arrow */}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-neutral-800" />
        </div>
      )}
    </div>
  );
};
