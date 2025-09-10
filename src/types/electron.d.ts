declare global {
  interface Window {
    electronAPI: {
      showOpenDialog: (options: {
        title?: string;
        filters?: Array<{
          name: string;
          extensions: string[];
        }>;
        properties?: Array<'openFile' | 'openDirectory' | 'multiSelections'>;
      }) => Promise<{
        canceled: boolean;
        filePaths: string[];
      }>;
    };
  }
}

export {};
