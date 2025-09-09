import React, { useState } from 'react';

interface TopBarProps {
  onNavigate: (component: string) => void;
  currentComponent: string;
  children?: React.ReactNode;
}

const TopBar: React.FC<TopBarProps> = ({ onNavigate, currentComponent, children }) => {
  const [searchValue, setSearchValue] = useState('');

  const navigationItems = [
    { key: 'glossary', label: 'Glossary', description: 'Search and manage glossary terms' },
    { key: 'pansalb', label: 'PanSALB', description: 'Verification and quality assurance' },
    { key: 'terminologist', label: 'Terminologist', description: 'Term review and management' },
    { key: 'translators', label: 'Translators', description: 'Translation projects and workspace' },
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
          <button className="flex items-center gap-1.5 bg-blue-600 text-white px-3 py-1.5 rounded-md text-xs font-medium hover:bg-blue-700 transition-colors h-7">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            New
          </button>
          
          <button className="p-1.5 text-gray-400 hover:text-gray-600 transition-colors rounded-md hover:bg-gray-50">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 19.5A2.5 2.5 0 016.5 17H20" />
            </svg>
          </button>
          
          <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center">
            <span className="text-xs font-medium text-gray-600">A</span>
          </div>
        </div>
      </div>
      
      {/* Navigation Bar */}
      <div className="bg-white border-b border-gray-200">
        <div className="flex items-center gap-1 px-6 py-2">
          {navigationItems.map((item) => (
            <button
              key={item.key}
              onClick={() => onNavigate(item.key)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                currentComponent === item.key
                  ? 'bg-blue-100 text-blue-700 border border-blue-200'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
              title={item.description}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
      
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