"use client";

import React from "react";
import { Badge } from "@/ui/components/Badge";
import { Button } from "@/ui/components/Button";
import { TextArea } from "@/ui/components/TextArea";

function TranslationEditor() {
  return (
    <div className="container max-w-none flex h-full w-full flex-col items-start rounded-md bg-neutral-100 py-6">
      <div className="flex w-full grow shrink-0 basis-0 flex-col items-start gap-6 px-12 py-12">
        <div className="flex w-full items-center justify-between">
          <span className="text-heading-2 font-heading-2 text-default-font">
            Project: Tshivenda Translation
          </span>
          <Badge>Tshivenda</Badge>
        </div>
        <div className="flex w-full grow shrink-0 basis-0 flex-col items-start gap-6">
          <div className="flex w-full items-start gap-4">
            <div className="flex grow shrink-0 basis-0 flex-col items-start gap-2">
              <span className="text-body-bold font-body-bold text-default-font">
                Source Text (English)
              </span>
              <TextArea
                className="h-auto min-h-[448px] w-full flex-none border focus:ring-2 focus:ring-2:focus resize-none rounded-md border-neutral-200 bg-neutral-50 px-3 py-3 text-body font-body text-default-font"
                label=""
                helpText=""
              />
            </div>
            <div className="flex grow shrink-0 basis-0 flex-col items-start gap-2">
              <span className="text-body-bold font-body-bold text-default-font">
                Translated Text (Tshivenda)
              </span>
              <TextArea
                className="h-auto min-h-[448px] w-full flex-none border focus:ring-2 focus:ring-2:focus resize-none rounded-md border-neutral-200 bg-neutral-50 px-3 py-3 text-body font-body text-default-font"
                label=""
                helpText=""
              />
            </div>
          </div>
          <div className="flex w-full flex-col items-start gap-4">
            <span className="text-body-bold font-body-bold text-default-font">
              Tshivenda Diacritics Keyboard
            </span>
            <div className="flex w-full flex-col items-start gap-4 rounded-md bg-white px-4 py-4 border border-neutral-200">
              <div className="flex w-full flex-col items-start gap-3">
                <span className="text-caption font-caption text-subtext-color">
                  Consonants with diacritics:
                </span>
                <div className="flex flex-wrap items-start gap-2">
                  <Button
                    className="h-12 w-12 flex-none text-lg font-medium"
                    variant="neutral-secondary"
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                  >
                    ḓ
                  </Button>
                  <Button
                    className="h-12 w-12 flex-none text-lg font-medium"
                    variant="neutral-secondary"
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                  >
                    ḽ
                  </Button>
                  <Button
                    className="h-12 w-12 flex-none text-lg font-medium"
                    variant="neutral-secondary"
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                  >
                    ṅ
                  </Button>
                  <Button
                    className="h-12 w-12 flex-none text-lg font-medium"
                    variant="neutral-secondary"
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                  >
                    ṋ
                  </Button>
                  <Button
                    className="h-12 w-12 flex-none text-lg font-medium"
                    variant="neutral-secondary"
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                  >
                    ṱ
                  </Button>
                </div>
              </div>
              <div className="flex w-full flex-col items-start gap-3">
                <span className="text-caption font-caption text-subtext-color">
                  Vowels with tone marks:
                </span>
                <div className="flex flex-wrap items-start gap-2">
                  <Button
                    className="h-12 w-12 flex-none text-lg font-medium"
                    variant="brand-secondary"
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                  >
                    á
                  </Button>
                  <Button
                    className="h-12 w-12 flex-none text-lg font-medium"
                    variant="brand-secondary"
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                  >
                    à
                  </Button>
                  <Button
                    className="h-12 w-12 flex-none text-lg font-medium"
                    variant="brand-secondary"
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                  >
                    é
                  </Button>
                  <Button
                    className="h-12 w-12 flex-none text-lg font-medium"
                    variant="brand-secondary"
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                  >
                    è
                  </Button>
                  <Button
                    className="h-12 w-12 flex-none text-lg font-medium"
                    variant="brand-secondary"
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                  >
                    í
                  </Button>
                  <Button
                    className="h-12 w-12 flex-none text-lg font-medium"
                    variant="brand-secondary"
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                  >
                    ì
                  </Button>
                  <Button
                    className="h-12 w-12 flex-none text-lg font-medium"
                    variant="brand-secondary"
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                  >
                    ó
                  </Button>
                  <Button
                    className="h-12 w-12 flex-none text-lg font-medium"
                    variant="brand-secondary"
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                  >
                    ò
                  </Button>
                  <Button
                    className="h-12 w-12 flex-none text-lg font-medium"
                    variant="brand-secondary"
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                  >
                    ú
                  </Button>
                  <Button
                    className="h-12 w-12 flex-none text-lg font-medium"
                    variant="brand-secondary"
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                  >
                    ù
                  </Button>
                </div>
              </div>
              <div className="flex w-full flex-col items-start gap-3">
                <span className="text-caption font-caption text-subtext-color">
                  Common letter combinations:
                </span>
                <div className="flex flex-wrap items-start gap-2">
                  <Button
                    className="h-12 w-auto flex-none px-3 text-sm font-medium"
                    variant="neutral-tertiary"
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                  >
                    tsh
                  </Button>
                  <Button
                    className="h-12 w-auto flex-none px-3 text-sm font-medium"
                    variant="neutral-tertiary"
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                  >
                    dzh
                  </Button>
                  <Button
                    className="h-12 w-auto flex-none px-3 text-sm font-medium"
                    variant="neutral-tertiary"
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                  >
                    kh
                  </Button>
                  <Button
                    className="h-12 w-auto flex-none px-3 text-sm font-medium"
                    variant="neutral-tertiary"
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                  >
                    ph
                  </Button>
                  <Button
                    className="h-12 w-auto flex-none px-3 text-sm font-medium"
                    variant="neutral-tertiary"
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                  >
                    th
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-full items-end justify-end">
            <Button
              className="rounded-full bg-success-500"
              size="large"
              onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
            >
              Submit Translation
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TranslationEditor;