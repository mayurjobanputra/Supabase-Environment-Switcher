import { useState } from 'react';
import WorkflowForm from '@/components/WorkflowForm';
import CodePreview from '@/components/CodePreview';
import { Button } from '@/components/ui/button';

const Index = () => {
  const [devSupabase, setDevSupabase] = useState('');
  const [prodSupabase, setProdSupabase] = useState('');
  const [devBranch, setDevBranch] = useState('development');
  const [prodBranch, setProdBranch] = useState('main');

  const generateWorkflow = () => {
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

      - name: Replace Supabase URL
        run: |
          # Specify the files to search and replace in
          find ./ -type f -name "*.js" -o -name "*.ts" -o -name "*.env" | while read -r file; do
            sed -i 's|${devSupabase}|${prodSupabase}|g' "$file"
          done

      - name: Commit changes
        run: |
          git config --local user.email "action@github.com"
          git config --local user.name "GitHub Action"
          git add .
          git commit -m "Replace dev Supabase URL with production URL" || echo "No changes to commit"
          git push origin HEAD:\${{ github.head_ref }}`;
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
            and production Supabase environments during pull requests.
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
            <CodePreview code={generateWorkflow()} />
          </div>
        </div>

        <div className="mt-16 space-y-8 text-gray-200">
          <div className="bg-gray-800/50 rounded-lg p-8 space-y-4">
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
                <li>Commit these changes back to your pull request</li>
              </ul>
              <p>
                This automation ensures that your application seamlessly transitions between development and production environments without manual intervention.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;