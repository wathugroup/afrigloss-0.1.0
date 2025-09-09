"use client";

import React from "react";
import { TextField } from "@/ui/components/TextField";
import { FeatherCheckCircle } from "@subframe/core";
import { FeatherSearch } from "@subframe/core";

function SearchHeader() {
  return (
    <div className="container max-w-none flex h-full w-full flex-col items-start gap-6 bg-default-background py-12">
      <div className="flex w-full flex-col items-start gap-8 px-6">
        <div className="flex w-full items-center justify-between">
          <span className="text-heading-1 font-heading-1 text-default-font">
            AfriGloss Tshivenda Dictionary
          </span>
        </div>
        <TextField
          className="h-auto w-full flex-none"
          variant="filled"
          label=""
          helpText=""
          icon={<FeatherSearch />}
        >
          <TextField.Input
            placeholder="Search for a term..."
            value=""
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {}}
          />
        </TextField>
        <div className="flex w-full flex-col items-start gap-4">
          <div className="flex w-full flex-col items-start gap-4 rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6">
            <div className="flex w-full items-center gap-2">
              <span className="text-heading-2 font-heading-2 text-default-font">
                Vhuswa
              </span>
              <FeatherCheckCircle className="text-heading-2 font-heading-2 text-success-500" />
            </div>
            <div className="flex w-full flex-col items-start gap-2">
              <span className="text-body-bold font-body-bold text-subtext-color">
                English: Porridge
              </span>
              <span className="text-body font-body text-default-font">
                A traditional staple food made from maize meal, cooked with
                water until it reaches a thick, smooth consistency. Commonly
                served as the main component of meals.
              </span>
            </div>
          </div>
          <div className="flex w-full flex-col items-start gap-4 rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6">
            <div className="flex w-full items-center gap-2">
              <span className="text-heading-2 font-heading-2 text-default-font">
                Mutshidzi
              </span>
              <FeatherCheckCircle className="text-heading-2 font-heading-2 text-success-500" />
            </div>
            <div className="flex w-full flex-col items-start gap-2">
              <span className="text-body-bold font-body-bold text-subtext-color">
                English: Helper
              </span>
              <span className="text-body font-body text-default-font">
                A person who provides assistance or aid to others. Often used in
                contexts of community support and mutual assistance.
              </span>
            </div>
          </div>
          <div className="flex w-full flex-col items-start gap-4 rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6">
            <div className="flex w-full items-center gap-2">
              <span className="text-heading-2 font-heading-2 text-default-font">
                Mulovha
              </span>
            </div>
            <div className="flex w-full flex-col items-start gap-2">
              <span className="text-body-bold font-body-bold text-subtext-color">
                English: Yesterday
              </span>
              <span className="text-body font-body text-default-font">
                The day before today. Used in temporal expressions and everyday
                conversation to refer to recent past events.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchHeader;