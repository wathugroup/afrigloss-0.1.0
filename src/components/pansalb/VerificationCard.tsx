"use client";

import React from "react";
import { Badge } from "@/ui/components/Badge";
import { Button } from "@/ui/components/Button";
import { IconWithBackground } from "@/ui/components/IconWithBackground";
import { DialogLayout } from "@/ui/layouts/DialogLayout";
import { FeatherCheck } from "@subframe/core";
import { FeatherCheckCircle } from "@subframe/core";
import { FeatherRotateCcw } from "@subframe/core";

function VerificationCard() {
  return (
    <DialogLayout open={false} onOpenChange={() => {}}>
      <div className="flex w-192 flex-col items-start gap-6 rounded-md border border-solid border-neutral-border bg-default-background px-6 py-6 shadow-sm">
        <div className="flex w-full flex-col items-center gap-6">
          <IconWithBackground
            size="large"
            icon={<FeatherCheckCircle />}
            square={true}
          />
          <div className="flex flex-col items-center gap-2">
            <span className="text-heading-2 font-heading-2 text-default-font text-center">
              Final Verification
            </span>
            <span className="text-body font-body text-subtext-color text-center">
              Please review the term carefully before giving final approval
            </span>
          </div>
        </div>
        <div className="flex h-px w-full flex-none flex-col items-center gap-2 bg-neutral-border" />
        <div className="flex w-full flex-col items-start gap-4">
          <div className="flex w-full flex-col items-start gap-2">
            <span className="text-body-bold font-body-bold text-default-font">
              Term
            </span>
            <span className="text-heading-3 font-heading-3 text-default-font">
              Vhulimi (Agriculture)
            </span>
          </div>
          <div className="flex w-full flex-col items-start gap-2">
            <span className="text-body-bold font-body-bold text-default-font">
              Definition
            </span>
            <span className="text-body font-body text-default-font">
              The science or practice of farming, including cultivation of the
              soil for the growing of crops and the rearing of animals to
              provide food, wool, and other products.
            </span>
          </div>
          <div className="flex w-full flex-col items-start gap-2">
            <span className="text-body-bold font-body-bold text-default-font">
              Peer Review Score
            </span>
            <div className="flex items-center gap-2">
              <Badge variant="success">4.8/5.0</Badge>
              <span className="text-body font-body text-subtext-color">
                Based on 12 reviews
              </span>
            </div>
          </div>
        </div>
        <div className="flex h-px w-full flex-none flex-col items-center gap-2 bg-neutral-border" />
        <div className="flex w-full items-center justify-center gap-3">
          <Button
            variant="neutral-secondary"
            size="large"
            icon={<FeatherRotateCcw />}
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
          >
            Send Back for Review
          </Button>
          <Button
            className="hover:bg-success-700:hover bg-success-600"
            size="large"
            icon={<FeatherCheck />}
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
          >
            Give Final Approval
          </Button>
        </div>
      </div>
    </DialogLayout>
  );
}

export default VerificationCard;