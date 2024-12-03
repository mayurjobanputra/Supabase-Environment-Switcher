import { useState } from 'react';
import WorkflowForm from '@/components/WorkflowForm';
import CodePreview from '@/components/CodePreview';
import { Button } from '@/components/ui/button';
import { validateSupabaseUrl, validateBranchName, validateAnonKey } from '@/utils/formValidation';

const Index = () => {
  const [devSupabase, setDevSupabase] = useState('');
  const [prodSupabase, setProdSupabase] = useState('');
  const [devBranch, setDevBranch] = useState('development');
  const [prodBranch, setProdBranch] = useState('main');
  const [devAnonKey, setDevAnonKey] = useState('');
  const [prodAnonKey, setProdAnonKey] = useState('');

  const extractProjectId = (url: string) => {
    const match = url.match(/https:\/\/(.*?)\.supabase\.co/);
    return match ? match[1] : '';
  };

  const hasValidationErrors = () => {
    return (
      !validateSupabaseUrl(devSupabase) ||
      !validateSupabaseUrl(prodSupabase) ||
      !validateBranchName(devBranch) ||
      !validateBranchName(prodBranch) ||
      !validateAnonKey(devAnonKey) ||
      !validateAnonKey(prodAnonKey)
    );
  };

  const isFormEmpty = () => {
    return !devSupabase && !prodSupabase && !devAnonKey && !prodAnonKey;
  };

  const generateWorkflow = () => {
    if (isFormEmpty() || hasValidationErrors() || !devSupabase || !prodSupabase || !devBranch || !prodBranch || !devAnonKey || !prodAnonKey) {
      return '';
    }

    const devProjectId = extractProjectId(devSupabase);
    const prodProjectId = extractProjectId(prodSupabase);

    return `name: Replace Supabase URL

on:
  pull_request:
    branches:
      - ${prodBranch}

jobs:
  replace-url:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v2

      - name: Replace Supabase URLs and Project IDs
        run: |
          # Specify the files to search and replace in
          find ./ -type f -name "*.js" -o -name "*.ts" -o -name "*.env" | while read -r file; do
            # Replace full URLs
            sed -i 's|${devSupabase}|${prodSupabase}|g' "$file"
            # Replace project IDs
            sed -i 's|${devProjectId}|${prodProjectId}|g' "$file"
            # Replace anon keys
            sed -i 's|${devAnonKey}|${prodAnonKey}|g' "$file"
          done`;
  };

  const scrollToHowItWorks = (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector('#how-it-works')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
            Supabase Environment Switcher
          </h1>
          <p className="text-gray-200 max-w-2xl mx-auto">
            Generate a GitHub Actions workflow that automatically switches between development
            and production Supabase environments during pull requests.{' '}
            <a href="#how-it-works" onClick={scrollToHowItWorks} className="text-blue-400 hover:text-blue-300 underline">
              Learn more
            </a>
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-semibold mb-4 text-white">Configuration</h2>
            <WorkflowForm
              devSupabase={devSupabase}
              setDevSupabase={setDevSupabase}
              prodSupabase={prodSupabase}
              setProdSupabase={setProdSupabase}
              devBranch={devBranch}
              setDevBranch={setDevBranch}
              prodBranch={prodBranch}
              setProdBranch={setProdBranch}
              devAnonKey={devAnonKey}
              setDevAnonKey={setDevAnonKey}
              prodAnonKey={prodAnonKey}
              setProdAnonKey={setProdAnonKey}
            />
            <div className="mt-4">
              <Button 
                className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold"
                onClick={() => {}}
              >
                Generate Workflow
              </Button>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4 text-white">Generated Workflow</h2>
            <p className="text-gray-300 mb-4">
              The workflow below is generated entirely in your browser using JavaScript - no server calls are made and your credentials never leave your device.
            </p>
            {isFormEmpty() ? (
              <div className="text-green-500 mb-4 p-4 border border-green-500 rounded bg-green-500/10">
                Fill in the form to generate your GitHub Actions workflow.
              </div>
            ) : hasValidationErrors() ? (
              <div className="text-red-500 mb-4 p-4 border border-red-500 rounded bg-red-500/10">
                Please fix the validation errors in the form before generating the workflow.
              </div>
            ) : null}
            <CodePreview code={generateWorkflow()} />
          </div>
        </div>

        <div className="mt-16 space-y-8 text-gray-200">
          <div id="how-it-works" className="bg-gray-800/50 rounded-lg p-8 space-y-4">
            <h2 className="text-2xl font-semibold text-white">How It Works</h2>
            <div className="space-y-4">
              <p>
                This tool generates a GitHub Actions workflow that automatically handles the switching between your development and production Supabase environments when creating pull requests.
              </p>
              <p>
                When you create a pull request from your development branch to your production branch, the generated workflow will:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Search through your codebase for the development Supabase URL</li>
                <li>Replace it with your production Supabase URL</li>
                <li>Update any project IDs and anon keys automatically</li>
                <li>Commit these changes back to your pull request</li>
              </ul>
              <div className="mt-6">
                <h3 className="text-xl font-semibold mb-2">Technical Details</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Uses GitHub Actions' powerful file manipulation capabilities</li>
                  <li>Searches through multiple file types (.js, .ts, .env)</li>
                  <li>Handles both full URLs and project IDs</li>
                  <li>Maintains your environment variables securely</li>
                  <li>Runs only on pull requests to your production branch</li>
                </ul>
              </div>
              <div className="mt-6">
                <h3 className="text-xl font-semibold mb-2">Best Practices</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Always review the changes before merging the pull request</li>
                  <li>Keep your production branch protected</li>
                  <li>Use environment-specific branches for development</li>
                  <li>Regularly update your development environment to match production schema</li>
                </ul>
              </div>
              <div className="mt-8 border-t border-gray-700 pt-6">
                <h3 className="text-xl font-semibold mb-2 text-yellow-400">Disclaimer</h3>
                <p className="text-sm text-gray-400">
                  This tool is provided as-is without any warranties or guarantees. While it has been tested extensively, 
                  I take no responsibility for any issues that may arise from its use. Always review the generated workflow 
                  and test thoroughly before deploying to production. For questions, updates, or more tools, 
                  follow me on <a href="https://mayur.ca/x" target="_blank" rel="noopener noreferrer" 
                  className="text-blue-400 hover:text-blue-300">Twitter</a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
