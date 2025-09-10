import React, { useState } from 'react';
import { Bell, Plus, FolderPlus, FileText, BookOpen, CheckCircle, Clock, User, Settings, LogOut, ChevronDown } from 'lucide-react';
import { DropdownMenu, Avatar } from '@/ui';
import * as SubframeCore from '@subframe/core';

interface TopBarProps {
  onNavigate: (component: string) => void;
  currentComponent: string;
  children?: React.ReactNode;
  hideNavigation?: boolean;
}

const TopBar: React.FC<TopBarProps> = ({ onNavigate, currentComponent, children, hideNavigation }) => {
  const [searchValue, setSearchValue] = useState('');

  // Notification options
  const notificationOptions = [
    {
      id: 'review',
      title: 'Terms awaiting review',
      description: '5 new terms need your review',
      icon: CheckCircle,
      action: () => console.log('Review terms clicked')
    },
    {
      id: 'assignment',
      title: 'Document assigned',
      description: 'Legal terminology document assigned to you',
      icon: FileText,
      action: () => console.log('Document assigned clicked')
    },
    {
      id: 'deadline',
      title: 'Review deadline approaching',
      description: 'Medical terms review due tomorrow',
      icon: Clock,
      action: () => console.log('Deadline clicked')
    }
  ];

  // New dropdown options
  const newOptions = [
    {
      id: 'project',
      label: 'New Project',
      icon: FolderPlus,
      action: () => console.log('New Project clicked')
    },
    {
      id: 'document',
      label: 'New Document',
      icon: FileText,
      action: () => console.log('New Document clicked')
    },
    {
      id: 'term',
      label: 'New Term',
      icon: BookOpen,
      action: () => console.log('New Term clicked')
    }
  ];

  // Profile dropdown options
  const profileOptions = [
    {
      id: 'profile',
      label: 'Profile',
      icon: User,
      action: () => console.log('Profile clicked')
    },
    {
      id: 'settings',
      label: 'Settings',
      icon: Settings,
      action: () => console.log('Settings clicked')
    },
    {
      id: 'signout',
      label: 'Sign Out',
      icon: LogOut,
      action: () => console.log('Sign Out clicked')
    }
  ];

  const navigationItems = [
    { key: 'translators', label: 'Translations', description: 'Translation projects and workspace' },
    { key: 'terms', label: 'Terms', description: 'Term review and management' },
    { key: 'pansalb', label: 'PanSALB', description: 'Verification and quality assurance' },
    { key: 'glossary', label: 'Glossary', description: 'Search and manage glossary terms' },
  ];

  return (
    <div className="flex h-screen w-full flex-col">
      {/* Custom Titlebar - integrates with native window controls */}
      <div className="flex items-center justify-between bg-white border-b border-gray-200 h-10 app-region-drag" style={{ paddingLeft: '70px', paddingRight: '16px' }}>
        <div className="flex items-center gap-4 app-region-no-drag ml-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center">
              <span className="text-white font-bold text-xs">AG</span>
            </div>
            <h1 className="text-sm font-semibold text-gray-900">AfriGloss</h1>
          </div>
          
          <div className="flex items-center bg-gray-50 rounded-md px-3 py-1.5 min-w-[200px] h-7">
            <svg className="w-3.5 h-3.5 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search..."
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              className="bg-transparent outline-none flex-1 text-xs text-gray-700 placeholder-gray-400"
            />
          </div>
        </div>

        <div className="flex items-center gap-3 app-region-no-drag">
          <SubframeCore.DropdownMenu.Root>
            <SubframeCore.DropdownMenu.Trigger asChild>
              <button className="flex items-center gap-1.5 bg-blue-600 text-white px-3 py-1.5 rounded-md text-xs font-medium hover:bg-blue-700 transition-colors h-7">
                <Plus className="w-3.5 h-3.5" />
                New
                <ChevronDown className="w-3 h-3" />
              </button>
            </SubframeCore.DropdownMenu.Trigger>
            <SubframeCore.DropdownMenu.Portal>
              <SubframeCore.DropdownMenu.Content align="end" sideOffset={8}>
                <DropdownMenu>
                  {newOptions.map((option) => {
                    const IconComponent = option.icon;
                    return (
                      <DropdownMenu.DropdownItem
                        key={option.id}
                        onSelect={option.action}
                        icon={<IconComponent className="w-4 h-4" />}
                      >
                        {option.label}
                      </DropdownMenu.DropdownItem>
                    );
                  })}
                </DropdownMenu>
              </SubframeCore.DropdownMenu.Content>
            </SubframeCore.DropdownMenu.Portal>
          </SubframeCore.DropdownMenu.Root>
          
          <SubframeCore.DropdownMenu.Root>
            <SubframeCore.DropdownMenu.Trigger asChild>
              <button className="relative p-1.5 text-gray-400 hover:text-gray-600 transition-colors rounded-md hover:bg-gray-50">
                <Bell className="w-4 h-4" />
                {/* Notification badge */}
                {notificationOptions.length > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-red-500 rounded-full"></span>
                )}
              </button>
            </SubframeCore.DropdownMenu.Trigger>
            <SubframeCore.DropdownMenu.Portal>
              <SubframeCore.DropdownMenu.Content align="end" sideOffset={8}>
                <DropdownMenu>
                  {notificationOptions.map((notification) => {
                    return (
                      <DropdownMenu.DropdownItem
                        key={notification.id}
                        onSelect={notification.action}
                        icon={null}
                        className="h-auto py-3 px-3"
                      >
                        <div className="flex flex-col gap-1 min-w-0 flex-1">
                          <span className="text-sm font-medium text-gray-900 leading-tight">{notification.title}</span>
                          <span className="text-xs text-gray-500 leading-relaxed">{notification.description}</span>
                        </div>
                      </DropdownMenu.DropdownItem>
                    );
                  })}
                </DropdownMenu>
              </SubframeCore.DropdownMenu.Content>
            </SubframeCore.DropdownMenu.Portal>
          </SubframeCore.DropdownMenu.Root>
          
          <SubframeCore.DropdownMenu.Root>
            <SubframeCore.DropdownMenu.Trigger asChild>
              <button className="cursor-pointer">
                <Avatar size="small">
                  A
                </Avatar>
              </button>
            </SubframeCore.DropdownMenu.Trigger>
            <SubframeCore.DropdownMenu.Portal>
              <SubframeCore.DropdownMenu.Content align="end" sideOffset={8} className="min-w-[200px]">
                <div className="flex min-w-[200px] flex-col items-start rounded-md border border-solid border-neutral-border bg-default-background px-1 py-1 shadow-lg">
                  {/* User Info Section */}
                  <div className="w-full px-3 py-3 border-b border-gray-100">
                    <div className="flex items-center gap-3">
                      <Avatar size="medium">
                        A
                      </Avatar>
                      <div className="flex flex-col min-w-0 flex-1">
                        <span className="text-sm font-medium text-gray-900">Admin User</span>
                        <span className="text-xs text-gray-500">admin@afrigloss.com</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Menu Items */}
                  {profileOptions.map((option, index) => {
                    const IconComponent = option.icon;
                    const isSignOut = option.id === 'signout';
                    const showDivider = option.id === 'signout';
                    
                    return (
                      <div key={option.id} className="w-full">
                        {showDivider && (
                          <div className="w-full px-1 py-1">
                            <div className="h-px w-full bg-neutral-200" />
                          </div>
                        )}
                        <button
                          onClick={option.action}
                          className={`w-full flex h-8 cursor-pointer items-center gap-2 rounded-md px-3 hover:bg-neutral-100 active:bg-neutral-50 ${isSignOut ? 'text-red-600 hover:text-red-700' : 'text-default-font hover:text-default-font'}`}
                        >
                          <IconComponent className={`w-4 h-4 ${isSignOut ? 'text-red-500' : 'text-body'}`} />
                          <span className={`line-clamp-1 grow shrink-0 basis-0 text-body font-body text-left ${isSignOut ? 'text-red-600' : 'text-default-font'}`}>
                            {option.label}
                          </span>
                        </button>
                      </div>
                    );
                  })}
                </div>
              </SubframeCore.DropdownMenu.Content>
            </SubframeCore.DropdownMenu.Portal>
          </SubframeCore.DropdownMenu.Root>
        </div>
      </div>
      
      {/* Navigation Tabs */}
      {!hideNavigation && (
        <div className="bg-white border-b border-gray-200">
          <div className="flex items-center px-6">
            {navigationItems.map((item) => (
              <button
                key={item.key}
                onClick={() => onNavigate(item.key)}
                className={`relative px-4 py-3 text-sm font-medium transition-colors ${
                  currentComponent === item.key
                    ? 'text-blue-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
                title={item.description}
              >
                {item.label}
                {currentComponent === item.key && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600" />
                )}
              </button>
            ))}
          </div>
        </div>
      )}
      
      {/* Content Area */}
      {children && (
        <div className="flex-1 overflow-y-auto bg-gray-50">
          {children}
        </div>
      )}
    </div>
  );
};

export default TopBar;