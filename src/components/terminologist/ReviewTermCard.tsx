"use client";

import React from "react";
import { Badge } from "@/ui/components/Badge";
import { Button } from "@/ui/components/Button";
import { DialogLayout } from "@/ui/layouts/DialogLayout";
import { FeatherCheck } from "@subframe/core";
import { FeatherEdit2 } from "@subframe/core";
import { FeatherTrendingUp } from "@subframe/core";
import { FeatherX } from "@subframe/core";

function ReviewTermCard() {
  return (
    <DialogLayout open={false} onOpenChange={() => {}}>
      <div className="flex h-full w-192 flex-col items-start gap-4 bg-default-background">
        <div className="flex w-full grow shrink-0 basis-0 flex-col items-start gap-6 rounded-md border border-solid border-neutral-border bg-default-background px-6 py-6">
          <div className="flex w-full items-start justify-between">
            <div className="flex flex-col items-start gap-1">
              <span className="text-heading-2 font-heading-2 text-default-font">
                Agriculture
              </span>
              <span className="text-body font-body text-subtext-color">
                English Term
              </span>
            </div>
            <div className="flex items-center gap-2">
              <FeatherTrendingUp className="text-heading-3 font-heading-3 text-success-600" />
              <span className="text-heading-3 font-heading-3 text-success-600">
                +24
              </span>
            </div>
          </div>
          <div className="flex w-full flex-col items-start gap-4 rounded-md bg-neutral-50 px-6 py-6">
            <div className="flex w-full flex-col items-start gap-1">
              <span className="text-body-bold font-body-bold text-default-font">
                Vhulimi
              </span>
              <span className="text-body font-body text-subtext-color">
                Tshivenda Translation
              </span>
            </div>
            <div className="flex h-px w-full flex-none flex-col items-center gap-2 bg-neutral-200" />
            <div className="flex w-full flex-col items-start gap-1">
              <span className="text-body-bold font-body-bold text-default-font">
                Definition
              </span>
              <span className="text-body font-body text-default-font">
                The science or practice of farming, including cultivation of the
                soil for the growing of crops and the rearing of animals to
                provide food, wool, and other products.
              </span>
            </div>
          </div>
          <div className="flex w-full items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-body font-body text-subtext-color">
                Submitted by
              </span>
              <span className="text-body-bold font-body-bold text-default-font">
                #A392E4
              </span>
              <Badge>2.5x Multiplier</Badge>
            </div>
            <div className="flex items-center gap-2">
              <Button
                icon={<FeatherCheck />}
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
              >
                Approve
              </Button>
              <Button
                icon={<FeatherEdit2 />}
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
              >
                Suggest Edit
              </Button>
              <Button
                variant="destructive-primary"
                icon={<FeatherX />}
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
              >
                Reject
              </Button>
            </div>
          </div>
        </div>
      </div>
    </DialogLayout>
  );
}

export default ReviewTermCard;