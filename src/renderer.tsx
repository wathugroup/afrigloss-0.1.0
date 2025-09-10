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
                    <div className="h-full w-full bg-neutral-100">
                        <SearchHeader />
                    </div>
                );
            case 'pansalb':
                return (
                    <div className="h-full w-full bg-neutral-100">
                        <div className="flex gap-6">
                            <div className="flex-1">
                                <VerifierPanel />
                            </div>
                        </div>
                    </div>
                );
            case 'terms':
                return (
                    <div className="h-full w-full bg-neutral-100">
                        <div className="flex gap-6">
                            <div className="flex-1">
                                <TerminologistDashboard />
                            </div>
                        </div>
                    </div>
                );
            case 'translators':
                return (
                    <div className="h-full w-full bg-neutral-100">
                        {translationView === 'ProjectList' && <ProjectList onProjectSelect={handleProjectSelect} />}
                        {translationView === 'TranslatorWorkspace' && <TranslatorWorkspace onDocumentSelect={handleDocumentSelect} onBack={handleBackToProjects} />}
                        {translationView === 'TranslationEditor' && <TranslationEditor onBack={handleBackToWorkspace} />}
                    </div>
                );
            default:
                return (
                    <div className="h-full w-full bg-neutral-100">
                        <ProjectList />
                    </div>
                );
        }
    };

    const shouldHideNavigation = currentComponent === 'translators' && (translationView === 'TranslatorWorkspace' || translationView === 'TranslationEditor');

    return (
        <TopBar onNavigate={handleNavigate} currentComponent={currentComponent} hideNavigation={shouldHideNavigation}>
            {renderComponent()}
        </TopBar>
    );
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);

