"use client";

import React from "react";
import { Avatar } from "@/ui/components/Avatar";
import { Badge } from "@/ui/components/Badge";
import { Button } from "@/ui/components/Button";
import { DropdownMenu } from "@/ui/components/DropdownMenu";
import { FilterBadge } from "@/ui/components/FilterBadge";
import { IconButton } from "@/ui/components/IconButton";
import { Progress } from "@/ui/components/Progress";
import { Table } from "@/ui/components/Table";
import { TextField } from "@/ui/components/TextField";
import { FeatherArrowDownUp } from "@subframe/core";
import { FeatherArrowRight } from "@subframe/core";
import { FeatherCheckCircle } from "@subframe/core";
import { FeatherChevronDown } from "@subframe/core";
import { FeatherClock } from "@subframe/core";
import { FeatherEdit2 } from "@subframe/core";
import { FeatherFileText } from "@subframe/core";
import { FeatherGlobe } from "@subframe/core";
import { FeatherListFilter } from "@subframe/core";
import { FeatherLoader } from "@subframe/core";
import { FeatherMoreHorizontal } from "@subframe/core";
import { FeatherPlus } from "@subframe/core";
import { FeatherSearch } from "@subframe/core";
import { FeatherTrash } from "@subframe/core";
import { FeatherUpload } from "@subframe/core";
import { FeatherUser } from "@subframe/core";
import * as SubframeCore from "@subframe/core";

interface TranslatorWorkspaceProps {
  onDocumentSelect?: (document: any) => void;
}

function TranslatorWorkspace({ onDocumentSelect }: TranslatorWorkspaceProps) {
  return (
    <div className="container max-w-none flex h-full w-full flex-col items-start bg-default-background">
      <div className="flex w-full flex-wrap items-center gap-2 px-6 pt-6 pb-2">
        <div className="flex grow shrink-0 basis-0 items-center gap-2">
          <FeatherFileText className="text-heading-2 font-heading-2 text-default-font" />
          <span className="text-heading-2 font-heading-2 text-default-font">
            Translation Documents
          </span>
          <Badge variant="success">Active</Badge>
        </div>
        <Button
          variant="neutral-primary"
          icon={<FeatherUpload />}
          onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
        >
          Import Document
        </Button>
        <Button
          icon={<FeatherPlus />}
          onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
        >
          New Document
        </Button>
      </div>
      <div className="flex w-full flex-wrap items-center gap-6 border-b border-solid border-neutral-border px-6 pt-2 pb-4">
        <div className="flex grow shrink-0 basis-0 items-center gap-6">
          <TextField
            variant="filled"
            label=""
            helpText=""
            icon={<FeatherSearch />}
          >
            <TextField.Input
              placeholder="Search documents"
              value=""
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {}}
            />
          </TextField>
        </div>
        <div className="flex flex-wrap items-start gap-1">
          <SubframeCore.DropdownMenu.Root>
            <SubframeCore.DropdownMenu.Trigger asChild={true}>
              <Button
                variant="neutral-tertiary"
                iconRight={<FeatherChevronDown />}
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
              >
                Status
              </Button>
            </SubframeCore.DropdownMenu.Trigger>
            <SubframeCore.DropdownMenu.Portal>
              <SubframeCore.DropdownMenu.Content
                side="bottom"
                align="start"
                sideOffset={4}
                asChild={true}
              >
                <DropdownMenu>
                  <DropdownMenu.DropdownItem icon={<FeatherClock />}>
                    Pending
                  </DropdownMenu.DropdownItem>
                  <DropdownMenu.DropdownItem icon={<FeatherLoader />}>
                    In Progress
                  </DropdownMenu.DropdownItem>
                  <DropdownMenu.DropdownItem icon={<FeatherCheckCircle />}>
                    Completed
                  </DropdownMenu.DropdownItem>
                </DropdownMenu>
              </SubframeCore.DropdownMenu.Content>
            </SubframeCore.DropdownMenu.Portal>
          </SubframeCore.DropdownMenu.Root>
          <Button
            variant="neutral-tertiary"
            icon={<FeatherListFilter />}
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
          >
            Filter
          </Button>
          <Button
            variant="neutral-tertiary"
            icon={<FeatherArrowDownUp />}
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
          >
            Sort
          </Button>
          <SubframeCore.DropdownMenu.Root>
            <SubframeCore.DropdownMenu.Trigger asChild={true}>
              <Button
                variant="neutral-tertiary"
                iconRight={<FeatherChevronDown />}
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
              >
                Language
              </Button>
            </SubframeCore.DropdownMenu.Trigger>
            <SubframeCore.DropdownMenu.Portal>
              <SubframeCore.DropdownMenu.Content
                side="bottom"
                align="start"
                sideOffset={4}
                asChild={true}
              >
                <DropdownMenu>
                  <DropdownMenu.DropdownItem icon={<FeatherGlobe />}>
                    All Languages
                  </DropdownMenu.DropdownItem>
                  <DropdownMenu.DropdownDivider />
                  <DropdownMenu.DropdownItem icon={null}>
                    Tshivenda
                  </DropdownMenu.DropdownItem>
                  <DropdownMenu.DropdownItem icon={null}>
                    Xitsonga
                  </DropdownMenu.DropdownItem>
                  <DropdownMenu.DropdownItem icon={null}>
                    isiZulu
                  </DropdownMenu.DropdownItem>
                </DropdownMenu>
              </SubframeCore.DropdownMenu.Content>
            </SubframeCore.DropdownMenu.Portal>
          </SubframeCore.DropdownMenu.Root>
        </div>
      </div>
      <div className="flex w-full flex-col items-start gap-2 px-6 py-4">
        <span className="text-body-bold font-body-bold text-subtext-color">
          Filter by language
        </span>
        <div className="flex w-full flex-wrap items-center gap-2">
          <FilterBadge label="English" count="31" selected={true} />
          <FilterBadge label="Tshivenda" count="28" selected={true} />
          <FilterBadge label="Spanish" count="17" />
          <FilterBadge label="French" count="12" />
          <FilterBadge label="German" count="9" />
        </div>
      </div>
      <div className="flex w-full grow shrink-0 basis-0 flex-col items-start gap-2 px-6 py-4 overflow-auto">
        <Table
          header={
            <Table.HeaderRow>
              <Table.HeaderCell>Document Title</Table.HeaderCell>
              <Table.HeaderCell>Languages</Table.HeaderCell>
              <Table.HeaderCell>Progress</Table.HeaderCell>
              <Table.HeaderCell>Due Date</Table.HeaderCell>
              <Table.HeaderCell>Assigned To</Table.HeaderCell>
              <Table.HeaderCell />
            </Table.HeaderRow>
          }
        >
          <Table.Row 
            className="cursor-pointer hover:bg-neutral-50 transition-colors"
            onClick={() => onDocumentSelect?.({ name: 'Product Documentation', language: 'Tshivenda', progress: 75 })}
          >
            <Table.Cell>
              <div className="flex items-center justify-center gap-4">
                <img
                  className="h-8 w-8 flex-none rounded-md object-cover"
                  src="https://res.cloudinary.com/subframe/image/upload/v1723780741/uploads/302/iocrneldnziecxz0a86f.png"
                />
                <span className="whitespace-nowrap text-body-bold font-body-bold text-neutral-700">
                  Product Documentation
                </span>
              </div>
            </Table.Cell>
            <Table.Cell>
              <div className="flex items-center gap-2">
                <Badge>EN</Badge>
                <FeatherArrowRight className="text-body font-body text-neutral-400" />
                <Badge variant="warning">TV</Badge>
              </div>
            </Table.Cell>
            <Table.Cell>
              <Progress value={75} />
            </Table.Cell>
            <Table.Cell>
              <span className="whitespace-nowrap text-body font-body text-neutral-500">
                Mar 15, 2024
              </span>
            </Table.Cell>
            <Table.Cell>
              <Avatar size="small" image="">
                JD
              </Avatar>
            </Table.Cell>
            <Table.Cell>
              <div className="flex grow shrink-0 basis-0 items-center justify-end">
                <SubframeCore.DropdownMenu.Root>
                  <SubframeCore.DropdownMenu.Trigger asChild={true}>
                    <IconButton
                      icon={<FeatherMoreHorizontal />}
                      onClick={(
                        event: React.MouseEvent<HTMLButtonElement>
                      ) => {}}
                    />
                  </SubframeCore.DropdownMenu.Trigger>
                  <SubframeCore.DropdownMenu.Portal>
                    <SubframeCore.DropdownMenu.Content
                      side="bottom"
                      align="end"
                      sideOffset={8}
                      asChild={true}
                    >
                      <DropdownMenu>
                        <DropdownMenu.DropdownItem icon={<FeatherEdit2 />}>
                          Edit
                        </DropdownMenu.DropdownItem>
                        <DropdownMenu.DropdownItem icon={<FeatherUser />}>
                          Assign
                        </DropdownMenu.DropdownItem>
                        <DropdownMenu.DropdownItem icon={<FeatherClock />}>
                          Set Due Date
                        </DropdownMenu.DropdownItem>
                        <DropdownMenu.DropdownItem icon={<FeatherTrash />}>
                          Delete
                        </DropdownMenu.DropdownItem>
                      </DropdownMenu>
                    </SubframeCore.DropdownMenu.Content>
                  </SubframeCore.DropdownMenu.Portal>
                </SubframeCore.DropdownMenu.Root>
              </div>
            </Table.Cell>
          </Table.Row>
          <Table.Row 
            className="cursor-pointer hover:bg-neutral-50 transition-colors"
            onClick={() => onDocumentSelect?.({ name: 'User Interface Strings', language: 'Tshivenda', progress: 0 })}
          >
            <Table.Cell>
              <div className="flex items-center justify-center gap-4">
                <img
                  className="h-8 w-8 flex-none rounded-md object-cover"
                  src="https://res.cloudinary.com/subframe/image/upload/v1723780751/uploads/302/cbaa1tfstfnmksus95et.png"
                />
                <span className="whitespace-nowrap text-body-bold font-body-bold text-neutral-700">
                  User Interface Strings
                </span>
              </div>
            </Table.Cell>
            <Table.Cell>
              <div className="flex items-center gap-2">
                <Badge>EN</Badge>
                <FeatherArrowRight className="text-body font-body text-neutral-400" />
                <Badge variant="warning">TV</Badge>
              </div>
            </Table.Cell>
            <Table.Cell>
              <Progress />
            </Table.Cell>
            <Table.Cell>
              <span className="whitespace-nowrap text-body font-body text-neutral-500">
                Mar 20, 2024
              </span>
            </Table.Cell>
            <Table.Cell>
              <Avatar size="small" image="">
                AM
              </Avatar>
            </Table.Cell>
            <Table.Cell>
              <div className="flex grow shrink-0 basis-0 items-center justify-end">
                <SubframeCore.DropdownMenu.Root>
                  <SubframeCore.DropdownMenu.Trigger asChild={true}>
                    <IconButton
                      icon={<FeatherMoreHorizontal />}
                      onClick={(
                        event: React.MouseEvent<HTMLButtonElement>
                      ) => {}}
                    />
                  </SubframeCore.DropdownMenu.Trigger>
                  <SubframeCore.DropdownMenu.Portal>
                    <SubframeCore.DropdownMenu.Content
                      side="bottom"
                      align="end"
                      sideOffset={8}
                      asChild={true}
                    >
                      <DropdownMenu>
                        <DropdownMenu.DropdownItem icon={<FeatherEdit2 />}>
                          Edit
                        </DropdownMenu.DropdownItem>
                        <DropdownMenu.DropdownItem icon={<FeatherUser />}>
                          Assign
                        </DropdownMenu.DropdownItem>
                        <DropdownMenu.DropdownItem icon={<FeatherClock />}>
                          Set Due Date
                        </DropdownMenu.DropdownItem>
                        <DropdownMenu.DropdownItem icon={<FeatherTrash />}>
                          Delete
                        </DropdownMenu.DropdownItem>
                      </DropdownMenu>
                    </SubframeCore.DropdownMenu.Content>
                  </SubframeCore.DropdownMenu.Portal>
                </SubframeCore.DropdownMenu.Root>
              </div>
            </Table.Cell>
          </Table.Row>
          <Table.Row 
            className="cursor-pointer hover:bg-neutral-50 transition-colors"
            onClick={() => onDocumentSelect?.({ name: 'Marketing Materials', language: 'Tshivenda', progress: 100 })}
          >
            <Table.Cell>
              <div className="flex items-center justify-center gap-4">
                <img
                  className="h-8 w-8 flex-none rounded-md object-cover"
                  src="https://res.cloudinary.com/subframe/image/upload/v1723780886/uploads/302/qw2wfjf4ptgiqbgi1jkf.png"
                />
                <span className="whitespace-nowrap text-body-bold font-body-bold text-neutral-700">
                  Marketing Materials
                </span>
              </div>
            </Table.Cell>
            <Table.Cell>
              <div className="flex items-center gap-2">
                <Badge>EN</Badge>
                <FeatherArrowRight className="text-body font-body text-neutral-400" />
                <Badge variant="warning">TV</Badge>
              </div>
            </Table.Cell>
            <Table.Cell>
              <Progress value={100} />
            </Table.Cell>
            <Table.Cell>
              <span className="whitespace-nowrap text-body font-body text-neutral-500">
                Completed
              </span>
            </Table.Cell>
            <Table.Cell>
              <Avatar size="small" image="">
                RK
              </Avatar>
            </Table.Cell>
            <Table.Cell>
              <div className="flex grow shrink-0 basis-0 items-center justify-end">
                <SubframeCore.DropdownMenu.Root>
                  <SubframeCore.DropdownMenu.Trigger asChild={true}>
                    <IconButton
                      icon={<FeatherMoreHorizontal />}
                      onClick={(
                        event: React.MouseEvent<HTMLButtonElement>
                      ) => {}}
                    />
                  </SubframeCore.DropdownMenu.Trigger>
                  <SubframeCore.DropdownMenu.Portal>
                    <SubframeCore.DropdownMenu.Content
                      side="bottom"
                      align="end"
                      sideOffset={8}
                      asChild={true}
                    >
                      <DropdownMenu>
                        <DropdownMenu.DropdownItem icon={<FeatherEdit2 />}>
                          Edit
                        </DropdownMenu.DropdownItem>
                        <DropdownMenu.DropdownItem icon={<FeatherUser />}>
                          Assign
                        </DropdownMenu.DropdownItem>
                        <DropdownMenu.DropdownItem icon={<FeatherClock />}>
                          Set Due Date
                        </DropdownMenu.DropdownItem>
                        <DropdownMenu.DropdownItem icon={<FeatherTrash />}>
                          Delete
                        </DropdownMenu.DropdownItem>
                      </DropdownMenu>
                    </SubframeCore.DropdownMenu.Content>
                  </SubframeCore.DropdownMenu.Portal>
                </SubframeCore.DropdownMenu.Root>
              </div>
            </Table.Cell>
          </Table.Row>
        </Table>
      </div>
    </div>
  );
}

export default TranslatorWorkspace;