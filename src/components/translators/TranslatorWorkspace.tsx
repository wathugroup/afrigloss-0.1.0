"use client";

import React, { useState } from "react";
import * as SubframeCore from "@subframe/core";
import { DropdownMenu } from "@/ui/components/DropdownMenu";
import { Button } from "@/ui/components/Button";
import { Badge } from "@/ui/components/Badge";
import { FilterBadge } from "@/ui/components/FilterBadge";
import { Table } from "@/ui/components/Table";
import { Avatar } from "@/ui/components/Avatar";
import { IconButton } from "@/ui/components/IconButton";
import { Calendar } from "@/ui/components/Calendar";
import {
  FeatherArrowLeft,
  FeatherUpload,
  FeatherChevronDown,
  FeatherClock,
  FeatherLoader,
  FeatherCheckCircle,
  FeatherUser,
  FeatherCalendar,
  FeatherArrowDownUp,
  FeatherType,
  FeatherArrowUp,
  FeatherArrowDown,
  FeatherMoreHorizontal,
  FeatherEdit,
  FeatherTrash2,
  FeatherArrowRight,
  FeatherEdit2,
  FeatherTrash,
} from "@subframe/core";
import { Progress } from "@/ui/components/Progress";

interface TranslatorWorkspaceProps {
  onDocumentSelect?: (document: any) => void;
  onBack?: () => void;
}

function TranslatorWorkspace({ onDocumentSelect, onBack }: TranslatorWorkspaceProps) {
  const [selectedDateRange, setSelectedDateRange] = useState<{
    from: Date | undefined;
    to: Date | undefined;
  }>({ from: undefined, to: undefined });
  return (
    <div className="max-w-none flex w-full flex-col items-start">
      <div className="flex w-full flex-wrap items-center gap-2 px-6 pt-6 pb-2">
        <div className="flex grow shrink-0 basis-0 items-center gap-2">
          {onBack && (
            <button
              onClick={onBack}
              className="text-sm text-gray-600 hover:text-gray-900 mr-2"
            >
              ← Back
            </button>
          )}
          <span className="text-heading-2 font-heading-2 text-default-font">
            Translation Documents
          </span>
          <Badge variant="success">Active</Badge>
        </div>
        <Button
          variant="neutral-secondary"
          icon={<FeatherUpload />}
          onClick={async (event: React.MouseEvent<HTMLButtonElement>) => {
            // Use Electron's dialog API to open file picker
            if (window.electronAPI) {
              try {
                const result = await window.electronAPI.showOpenDialog({
                  title: 'Select Document to Import',
                  filters: [
                    { name: 'Documents', extensions: ['pdf', 'docx', 'txt', 'md'] },
                    { name: 'All Files', extensions: ['*'] }
                  ],
                  properties: ['openFile']
                });
                
                if (!result.canceled && result.filePaths.length > 0) {
                  const filePath = result.filePaths[0];
                  console.log('Selected file:', filePath);
                  // TODO: Handle file import logic here
                }
              } catch (error) {
                console.error('Error opening file dialog:', error);
              }
            } else {
              console.warn('Electron API not available');
            }
          }}
        >
          Import Document
        </Button>
      </div>
      <div className="flex w-full flex-col items-start gap-2 px-6 py-4">
        <span className="text-body-bold font-body-bold text-subtext-color">
          Filters
        </span>
        <div className="flex w-full items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2">
            <FilterBadge label="English" count="6" selected={true} />
            <FilterBadge label="Tshivenda" count="3" selected={true} />
            <FilterBadge label="isiZulu" count="2" />
            <FilterBadge label="Afrikaans" count="1" />
          </div>
          <div className="flex flex-wrap items-center gap-2">
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
                  align="end"
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
            <SubframeCore.DropdownMenu.Root>
              <SubframeCore.DropdownMenu.Trigger asChild={true}>
                <Button
                  variant="neutral-tertiary"
                  iconRight={<FeatherChevronDown />}
                  onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                >
                  Assignee
                </Button>
              </SubframeCore.DropdownMenu.Trigger>
              <SubframeCore.DropdownMenu.Portal>
                <SubframeCore.DropdownMenu.Content
                  side="bottom"
                  align="end"
                  sideOffset={4}
                  asChild={true}
                >
                  <DropdownMenu>
                    <DropdownMenu.DropdownItem icon={<FeatherUser />}>
                      All Assignees
                    </DropdownMenu.DropdownItem>
                    <DropdownMenu.DropdownDivider />
                    <DropdownMenu.DropdownItem icon={<Avatar size="small">JD</Avatar>}>
                      John Doe
                    </DropdownMenu.DropdownItem>
                    <DropdownMenu.DropdownItem icon={<Avatar size="small">AM</Avatar>}>
                      Alice Miller
                    </DropdownMenu.DropdownItem>
                    <DropdownMenu.DropdownItem icon={<Avatar size="small">RK</Avatar>}>
                      Robert Kim
                    </DropdownMenu.DropdownItem>
                    <DropdownMenu.DropdownItem icon={<Avatar size="small">TM</Avatar>}>
                      Tom Martin
                    </DropdownMenu.DropdownItem>
                    <DropdownMenu.DropdownItem icon={<Avatar size="small">SK</Avatar>}>
                      Sarah Kim
                    </DropdownMenu.DropdownItem>
                    <DropdownMenu.DropdownItem icon={<Avatar size="small">LN</Avatar>}>
                      Lisa Nelson
                    </DropdownMenu.DropdownItem>
                  </DropdownMenu>
                </SubframeCore.DropdownMenu.Content>
              </SubframeCore.DropdownMenu.Portal>
            </SubframeCore.DropdownMenu.Root>
            <SubframeCore.DropdownMenu.Root>
              <SubframeCore.DropdownMenu.Trigger asChild={true}>
                <Button
                  variant="neutral-tertiary"
                  icon={<FeatherClock />}
                  iconRight={<FeatherChevronDown />}
                  onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                >
                  Due Date
                </Button>
              </SubframeCore.DropdownMenu.Trigger>
              <SubframeCore.DropdownMenu.Portal>
                <SubframeCore.DropdownMenu.Content
                  side="bottom"
                  align="end"
                  sideOffset={4}
                  className="w-auto p-0"
                >
                  <div className="p-3 bg-white rounded-lg shadow-lg border">
                    <Calendar
                      mode="range"
                      selected={selectedDateRange}
                      onSelect={(range: any) => {
                        if (range) {
                          setSelectedDateRange({
                            from: range.from,
                            to: range.to
                          });
                          console.log('Selected date range:', range);
                        }
                      }}
                    />
                  </div>
                </SubframeCore.DropdownMenu.Content>
              </SubframeCore.DropdownMenu.Portal>
            </SubframeCore.DropdownMenu.Root>
            <SubframeCore.DropdownMenu.Root>
              <SubframeCore.DropdownMenu.Trigger asChild={true}>
                <Button
                  variant="neutral-tertiary"
                  icon={<FeatherArrowDownUp />}
                  iconRight={<FeatherChevronDown />}
                  onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                >
                  Sort
                </Button>
              </SubframeCore.DropdownMenu.Trigger>
              <SubframeCore.DropdownMenu.Portal>
                <SubframeCore.DropdownMenu.Content
                  side="bottom"
                  align="end"
                  sideOffset={4}
                  asChild={true}
                >
                  <DropdownMenu>
                    <DropdownMenu.DropdownItem icon={<FeatherType />}>
                      Title A-Z
                    </DropdownMenu.DropdownItem>
                    <DropdownMenu.DropdownItem icon={<FeatherType />}>
                      Title Z-A
                    </DropdownMenu.DropdownItem>
                    <DropdownMenu.DropdownDivider />
                    <DropdownMenu.DropdownItem icon={<FeatherCalendar />}>
                      Due Date (Earliest)
                    </DropdownMenu.DropdownItem>
                    <DropdownMenu.DropdownItem icon={<FeatherCalendar />}>
                      Due Date (Latest)
                    </DropdownMenu.DropdownItem>
                    <DropdownMenu.DropdownDivider />
                    <DropdownMenu.DropdownItem icon={<FeatherArrowUp />}>
                      Progress (Low to High)
                    </DropdownMenu.DropdownItem>
                    <DropdownMenu.DropdownItem icon={<FeatherArrowDown />}>
                      Progress (High to Low)
                    </DropdownMenu.DropdownItem>
                  </DropdownMenu>
                </SubframeCore.DropdownMenu.Content>
              </SubframeCore.DropdownMenu.Portal>
            </SubframeCore.DropdownMenu.Root>
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col items-start gap-2 px-6 py-4 overflow-auto">
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
            onClick={() => onDocumentSelect?.({ name: 'User Interface Strings', language: 'isiZulu', progress: 0 })}
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
                <Badge variant="warning">ZU</Badge>
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
            onClick={() => onDocumentSelect?.({ name: 'Marketing Materials', language: 'Afrikaans', progress: 100 })}
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
                <Badge variant="success">AF</Badge>
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
          <Table.Row 
            className="cursor-pointer hover:bg-neutral-50 transition-colors"
            onClick={() => onDocumentSelect?.({ name: 'Legal Terms & Conditions', language: 'isiZulu', progress: 45 })}
          >
            <Table.Cell>
              <div className="flex items-center justify-center gap-4">
                <img
                  className="h-8 w-8 flex-none rounded-md object-cover"
                  src="https://res.cloudinary.com/subframe/image/upload/v1723780741/uploads/302/iocrneldnziecxz0a86f.png"
                />
                <span className="whitespace-nowrap text-body-bold font-body-bold text-neutral-700">
                  Legal Terms & Conditions
                </span>
              </div>
            </Table.Cell>
            <Table.Cell>
              <div className="flex items-center gap-2">
                <Badge>EN</Badge>
                <FeatherArrowRight className="text-body font-body text-neutral-400" />
                <Badge variant="warning">ZU</Badge>
              </div>
            </Table.Cell>
            <Table.Cell>
              <Progress value={45} />
            </Table.Cell>
            <Table.Cell>
              <span className="whitespace-nowrap text-body font-body text-neutral-500">
                Apr 10, 2024
              </span>
            </Table.Cell>
            <Table.Cell>
              <Avatar size="small" image="">
                TM
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
            onClick={() => onDocumentSelect?.({ name: 'Mobile App Content', language: 'Tshivenda', progress: 30 })}
          >
            <Table.Cell>
              <div className="flex items-center justify-center gap-4">
                <img
                  className="h-8 w-8 flex-none rounded-md object-cover"
                  src="https://res.cloudinary.com/subframe/image/upload/v1723780751/uploads/302/cbaa1tfstfnmksus95et.png"
                />
                <span className="whitespace-nowrap text-body-bold font-body-bold text-neutral-700">
                  Mobile App Content
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
              <Progress value={30} />
            </Table.Cell>
            <Table.Cell>
              <span className="whitespace-nowrap text-body font-body text-neutral-500">
                Apr 25, 2024
              </span>
            </Table.Cell>
            <Table.Cell>
              <Avatar size="small" image="">
                SK
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
            onClick={() => onDocumentSelect?.({ name: 'Website Footer Content', language: 'Tshivenda', progress: 85 })}
          >
            <Table.Cell>
              <div className="flex items-center justify-center gap-4">
                <img
                  className="h-8 w-8 flex-none rounded-md object-cover"
                  src="https://res.cloudinary.com/subframe/image/upload/v1723780886/uploads/302/qw2wfjf4ptgiqbgi1jkf.png"
                />
                <span className="whitespace-nowrap text-body-bold font-body-bold text-neutral-700">
                  Website Footer Content
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
              <Progress value={85} />
            </Table.Cell>
            <Table.Cell>
              <span className="whitespace-nowrap text-body font-body text-neutral-500">
                May 5, 2024
              </span>
            </Table.Cell>
            <Table.Cell>
              <Avatar size="small" image="">
                LN
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