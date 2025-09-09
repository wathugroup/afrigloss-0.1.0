"use client";

import React from "react";
import { Avatar } from "@/ui/components/Avatar";
import { Badge } from "@/ui/components/Badge";
import { Button } from "@/ui/components/Button";
import { FeatherBook } from "@subframe/core";
import { FeatherCheck } from "@subframe/core";
import { FeatherEdit2 } from "@subframe/core";
import { FeatherPlus } from "@subframe/core";

function TerminologistDashboard() {
  return (
    <div className="container max-w-none flex h-full w-full flex-col items-start gap-4 bg-default-background py-12">
      <div className="flex w-full items-center justify-between px-6">
        <div className="flex items-center gap-2">
          <FeatherBook className="text-heading-2 font-heading-2 text-brand-600" />
          <span className="text-heading-2 font-heading-2 text-default-font">
            Term Review Dashboard
          </span>
        </div>
        <Button
          icon={<FeatherPlus />}
          onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
        >
          Add New Term
        </Button>
      </div>
      <div className="flex w-full flex-col items-start gap-4 px-6">
        <div className="flex w-full flex-col items-start gap-4 rounded-md border border-solid border-neutral-border bg-default-background px-6 py-6">
          <div className="flex w-full items-start justify-between">
            <div className="flex flex-col items-start gap-1">
              <span className="text-heading-3 font-heading-3 text-default-font">
                Harvest
              </span>
              <span className="text-body font-body text-subtext-color">
                English Term
              </span>
            </div>
            <Badge variant="warning">Pending Review</Badge>
          </div>
          <div className="flex w-full flex-col items-start gap-4 rounded-md bg-neutral-50 px-6 py-4">
            <div className="flex w-full flex-col items-start gap-1">
              <span className="text-body-bold font-body-bold text-default-font">
                Khungelwa
              </span>
              <span className="text-body font-body text-subtext-color">
                Tshivenda Translation
              </span>
            </div>
          </div>
          <div className="flex w-full items-center justify-between">
            <div className="flex items-center gap-2">
              <Avatar
                size="small"
                image="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3"
              />
              <span className="text-body font-body text-subtext-color">
                Submitted by Sarah M.
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="neutral-tertiary"
                icon={<FeatherEdit2 />}
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
              >
                Edit
              </Button>
              <Button
                icon={<FeatherCheck />}
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
              >
                Review
              </Button>
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col items-start gap-4 rounded-md border border-solid border-neutral-border bg-default-background px-6 py-6">
          <div className="flex w-full items-start justify-between">
            <div className="flex flex-col items-start gap-1">
              <span className="text-heading-3 font-heading-3 text-default-font">
                Irrigation
              </span>
              <span className="text-body font-body text-subtext-color">
                English Term
              </span>
            </div>
            <Badge variant="warning">Pending Review</Badge>
          </div>
          <div className="flex w-full flex-col items-start gap-4 rounded-md bg-neutral-50 px-6 py-4">
            <div className="flex w-full flex-col items-start gap-1">
              <span className="text-body-bold font-body-bold text-default-font">
                Kunisela
              </span>
              <span className="text-body font-body text-subtext-color">
                Tshivenda Translation
              </span>
            </div>
          </div>
          <div className="flex w-full items-center justify-between">
            <div className="flex items-center gap-2">
              <Avatar
                size="small"
                image="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3"
              />
              <span className="text-body font-body text-subtext-color">
                Submitted by John D.
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="neutral-tertiary"
                icon={<FeatherEdit2 />}
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
              >
                Edit
              </Button>
              <Button
                icon={<FeatherCheck />}
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
              >
                Review
              </Button>
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col items-start gap-4 rounded-md border border-solid border-neutral-border bg-default-background px-6 py-6">
          <div className="flex w-full items-start justify-between">
            <div className="flex flex-col items-start gap-1">
              <span className="text-heading-3 font-heading-3 text-default-font">
                Fertilizer
              </span>
              <span className="text-body font-body text-subtext-color">
                English Term
              </span>
            </div>
            <Badge variant="warning">Pending Review</Badge>
          </div>
          <div className="flex w-full flex-col items-start gap-4 rounded-md bg-neutral-50 px-6 py-4">
            <div className="flex w-full flex-col items-start gap-1">
              <span className="text-body-bold font-body-bold text-default-font">
                Manyoro
              </span>
              <span className="text-body font-body text-subtext-color">
                Tshivenda Translation
              </span>
            </div>
          </div>
          <div className="flex w-full items-center justify-between">
            <div className="flex items-center gap-2">
              <Avatar
                size="small"
                image="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3"
              />
              <span className="text-body font-body text-subtext-color">
                Submitted by Mike R.
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="neutral-tertiary"
                icon={<FeatherEdit2 />}
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
              >
                Edit
              </Button>
              <Button
                icon={<FeatherCheck />}
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
              >
                Review
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TerminologistDashboard;