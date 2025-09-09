"use client";

import React from "react";
import { Badge } from "@/ui/components/Badge";
import { Button } from "@/ui/components/Button";
import { IconWithBackground } from "@/ui/components/IconWithBackground";
import { FeatherFolder } from "@subframe/core";
import { FeatherPlus } from "@subframe/core";

interface ProjectListProps {
  onProjectSelect?: (project: any) => void;
}

function ProjectList({ onProjectSelect }: ProjectListProps) {
  return (
    <div className="container max-w-none flex h-full w-full flex-col items-start gap-4 bg-default-background py-12">
      <div className="flex w-full items-center gap-2 px-6">
        <span className="grow shrink-0 basis-0 text-heading-2 font-heading-2 text-default-font">
          Projects
        </span>
        <Button
          icon={<FeatherPlus />}
          onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
        >
          New Project
        </Button>
      </div>
      <div className="flex w-full flex-col items-start gap-2 px-6">
        <div 
          className="flex w-full items-start gap-4 rounded-md border-l-4 border-solid border-warning-500 bg-neutral-50 px-4 py-4 cursor-pointer hover:bg-neutral-100 transition-colors"
          onClick={() => onProjectSelect?.({ name: 'Department of Health Posters', status: 'Untranslated', progress: 0 })}
        >
          <IconWithBackground
            variant="warning"
            size="medium"
            icon={<FeatherFolder />}
          />
          <div className="flex grow shrink-0 basis-0 flex-col items-start gap-2">
            <div className="flex w-full items-center justify-between">
              <span className="text-body-bold font-body-bold text-default-font">
                Department of Health Posters
              </span>
              <Badge variant="warning">Untranslated</Badge>
            </div>
            <span className="text-body font-body text-subtext-color">
              Progress: 0%
            </span>
          </div>
        </div>
        <div 
          className="flex w-full items-start gap-4 rounded-md border-l-4 border-solid border-brand-600 bg-brand-50 px-4 py-4 cursor-pointer hover:bg-brand-100 transition-colors"
          onClick={() => onProjectSelect?.({ name: 'Tshivenda Translation', status: 'Draft', progress: 45 })}
        >
          <IconWithBackground size="medium" icon={<FeatherFolder />} />
          <div className="flex grow shrink-0 basis-0 flex-col items-start gap-2">
            <div className="flex w-full items-center justify-between">
              <span className="text-body-bold font-body-bold text-default-font">
                Tshivenda Translation
              </span>
              <Badge>Draft</Badge>
            </div>
            <span className="text-body font-body text-subtext-color">
              Progress: 45%
            </span>
          </div>
        </div>
        <div 
          className="flex w-full items-start gap-4 rounded-md border-l-4 border-solid border-success-500 px-4 py-4 cursor-pointer hover:bg-success-50 transition-colors"
          onClick={() => onProjectSelect?.({ name: 'Q4 Reports', status: 'Completed', progress: 100 })}
        >
          <IconWithBackground
            variant="success"
            size="medium"
            icon={<FeatherFolder />}
          />
          <div className="flex grow shrink-0 basis-0 flex-col items-start gap-2">
            <div className="flex w-full items-center justify-between">
              <span className="text-body-bold font-body-bold text-default-font">
                Q4 Reports
              </span>
              <Badge variant="success">Completed</Badge>
            </div>
            <span className="text-body font-body text-subtext-color">
              Progress: 100%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectList;