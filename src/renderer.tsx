/**
 * This file will automatically be loaded by webpack and run in the "renderer" context.
 * To learn more about the differences between the "main" and the "renderer" context in
 * Electron, visit:
 *
 * https://electronjs.org/docs/latest/tutorial/process-model
 *
 * By default, Node.js integration in this file is disabled. When enabling Node.js integration
 * in a renderer process, please be aware of potential security implications. You can read
 * more about security risks here:
 *
 * https://electronjs.org/docs/tutorial/security
 *
 * To enable Node.js integration in this file, open up `main.js` and enable the `nodeIntegration`
 * flag:
 *
 * ```
 *  // Create the browser window.
 *  mainWindow = new BrowserWindow({
 *    width: 800,
 *    height: 600,
 *    webPreferences: {
 *      nodeIntegration: true
 *    }
 *  });
 * ```
 */

import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';
import TopBar from './components/TopBar';

// Import all the components
import SearchHeader from './components/glossary/SearchHeader';
import VerificationCard from './components/pansalb/VerificationCard';
import VerifierPanel from './components/pansalb/VerifierPanel';
import ReviewTermCard from './components/terminologist/ReviewTermCard';
import TerminologistDashboard from './components/terminologist/TerminologistDashboard';
import ProjectList from './components/translators/ProjectList';
import TranslationEditor from './components/translators/TranslationEditor';
import TranslatorWorkspace from './components/translators/TranslatorWorkspace';

const App = () => {
    const [currentComponent, setCurrentComponent] = useState('translators');
    const [translationView, setTranslationView] = useState('ProjectList');
    const [selectedProject, setSelectedProject] = useState(null);
    const [selectedDocument, setSelectedDocument] = useState(null);

    const handleNavigate = (component: string) => {
        setCurrentComponent(component);
        // Reset translation view when switching to translators section
        if (component === 'translators') {
            setTranslationView('ProjectList');
            setSelectedProject(null);
            setSelectedDocument(null);
        }
    };

    const handleProjectSelect = (project: any) => {
        setSelectedProject(project);
        setTranslationView('TranslatorWorkspace');
    };

    const handleDocumentSelect = (document: any) => {
        setSelectedDocument(document);
        setTranslationView('TranslationEditor');
    };

    const handleBackToProjects = () => {
        setTranslationView('ProjectList');
        setSelectedProject(null);
        setSelectedDocument(null);
    };

    const handleBackToWorkspace = () => {
        setTranslationView('TranslatorWorkspace');
        setSelectedDocument(null);
    };

    const renderComponent = () => {
        switch (currentComponent) {
            case 'glossary':
                return (
                    <div className="p-6">
                        <div className="mb-4">
                            <h2 className="text-2xl font-bold text-gray-900 mb-2">Glossary Management</h2>
                            <p className="text-gray-600">Search and manage glossary terms</p>
                        </div>
                        <SearchHeader />
                    </div>
                );
            case 'pansalb':
                return (
                    <div className="p-6">
                        <div className="mb-4">
                            <h2 className="text-2xl font-bold text-gray-900 mb-2">PanSALB Verification</h2>
                            <p className="text-gray-600">Quality assurance and verification tools</p>
                        </div>
                        <div className="flex gap-6">
                            <div className="flex-1">
                                <VerifierPanel />
                            </div>
                            <div className="w-80">
                                <VerificationCard />
                            </div>
                        </div>
                    </div>
                );
            case 'terminologist':
                return (
                    <div className="p-6">
                        <div className="mb-4">
                            <h2 className="text-2xl font-bold text-gray-900 mb-2">Terminologist Dashboard</h2>
                            <p className="text-gray-600">Term review and management</p>
                        </div>
                        <div className="flex gap-6">
                            <div className="flex-1">
                                <TerminologistDashboard />
                            </div>
                            <div className="w-80">
                                <ReviewTermCard />
                            </div>
                        </div>
                    </div>
                );
            case 'translators':
                return (
                    <div className="p-6">
                        <div className="mb-4">
                            <div className="flex items-center gap-2 mb-2">
                                {translationView !== 'ProjectList' && (
                                    <button
                                        onClick={translationView === 'TranslationEditor' ? handleBackToWorkspace : handleBackToProjects}
                                        className="px-3 py-1 rounded text-sm bg-gray-100 text-gray-600 hover:bg-gray-200"
                                    >
                                        ← Back
                                    </button>
                                )}
                                <h2 className="text-2xl font-bold text-gray-900">
                                    {translationView === 'ProjectList' && 'Translation Projects'}
                                    {translationView === 'TranslatorWorkspace' && `${selectedProject?.name || 'Project'} - Documents`}
                                    {translationView === 'TranslationEditor' && `${selectedDocument?.name || 'Document'} - Editor`}
                                </h2>
                            </div>
                            <p className="text-gray-600">
                                {translationView === 'ProjectList' && 'Select a project to start translating'}
                                {translationView === 'TranslatorWorkspace' && 'Choose a document to translate'}
                                {translationView === 'TranslationEditor' && 'Translate the selected document'}
                            </p>
                        </div>
                        {translationView === 'ProjectList' && <ProjectList onProjectSelect={handleProjectSelect} />}
                        {translationView === 'TranslatorWorkspace' && <TranslatorWorkspace onDocumentSelect={handleDocumentSelect} />}
                        {translationView === 'TranslationEditor' && <TranslationEditor />}
                    </div>
                );
            default:
                return (
                    <div className="p-6">
                        <ProjectList />
                    </div>
                );
        }
    };

    return (
        <TopBar onNavigate={handleNavigate} currentComponent={currentComponent}>
            {renderComponent()}
        </TopBar>
    );
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);

