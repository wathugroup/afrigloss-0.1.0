"use client";

import React from "react";
import { Badge } from "@/ui/components/Badge";
import { Button } from "@/ui/components/Button";
import { IconWithBackground } from "@/ui/components/IconWithBackground";
import { FeatherCheck } from "@subframe/core";
import { FeatherCheckCircle } from "@subframe/core";

function VerifierPanel() {
  return (
    <div className="container max-w-none flex h-full w-full flex-col items-start gap-6 bg-default-background py-12">
      <div className="flex w-full items-center justify-between px-6">
        <div className="flex flex-col items-start gap-1">
          <span className="text-heading-2 font-heading-2 text-default-font">
            Term Verification
          </span>
          <span className="text-body font-body text-subtext-color">
            Review and approve verified translations
          </span>
        </div>
        <Badge>4 terms pending</Badge>
      </div>
      <div className="flex w-full flex-col items-start rounded-md border border-solid border-neutral-border bg-default-background px-6">
        <div className="flex w-full flex-wrap items-center gap-4 border-b border-solid border-neutral-border px-3 py-6">
          <IconWithBackground size="medium" icon={<FeatherCheckCircle />} />
          <div className="flex grow shrink-0 basis-0 flex-col items-start gap-2">
            <span className="text-heading-3 font-heading-3 text-default-font">
              Vhulimi (Agriculture)
            </span>
            <div className="flex items-center gap-2">
              <Badge variant="success">4.8/5.0</Badge>
              <span className="text-body font-body text-subtext-color">
                12 reviews
              </span>
            </div>
          </div>
          <Button
            icon={<FeatherCheck />}
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
          >
            Review
          </Button>
        </div>
        <div className="flex w-full flex-wrap items-center gap-4 border-b border-solid border-neutral-border px-3 py-6">
          <IconWithBackground size="medium" icon={<FeatherCheckCircle />} />
          <div className="flex grow shrink-0 basis-0 flex-col items-start gap-2">
            <span className="text-heading-3 font-heading-3 text-default-font">
              Mupo (Nature)
            </span>
            <div className="flex items-center gap-2">
              <Badge variant="success">4.6/5.0</Badge>
              <span className="text-body font-body text-subtext-color">
                8 reviews
              </span>
            </div>
          </div>
          <Button
            icon={<FeatherCheck />}
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
          >
            Review
          </Button>
        </div>
        <div className="flex w-full flex-wrap items-center gap-4 border-b border-solid border-neutral-border px-3 py-6">
          <IconWithBackground size="medium" icon={<FeatherCheckCircle />} />
          <div className="flex grow shrink-0 basis-0 flex-col items-start gap-2">
            <span className="text-heading-3 font-heading-3 text-default-font">
              Pfunzo (Education)
            </span>
            <div className="flex items-center gap-2">
              <Badge variant="success">4.9/5.0</Badge>
              <span className="text-body font-body text-subtext-color">
                15 reviews
              </span>
            </div>
          </div>
          <Button
            icon={<FeatherCheck />}
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
          >
            Review
          </Button>
        </div>
        <div className="flex w-full flex-wrap items-center gap-4 px-3 py-6">
          <IconWithBackground size="medium" icon={<FeatherCheckCircle />} />
          <div className="flex grow shrink-0 basis-0 flex-col items-start gap-2">
            <span className="text-heading-3 font-heading-3 text-default-font">
              Vhutshilo (Life)
            </span>
            <div className="flex items-center gap-2">
              <Badge variant="success">4.7/5.0</Badge>
              <span className="text-body font-body text-subtext-color">
                10 reviews
              </span>
            </div>
          </div>
          <Button
            icon={<FeatherCheck />}
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
          >
            Review
          </Button>
        </div>
      </div>
    </div>
  );
}

export default VerifierPanel;