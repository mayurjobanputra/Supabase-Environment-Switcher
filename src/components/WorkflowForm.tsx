import React from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { HelpCircle } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface WorkflowFormProps {
  devSupabase: string;
  setDevSupabase: (value: string) => void;
  prodSupabase: string;
  setProdSupabase: (value: string) => void;
  devBranch: string;
  setDevBranch: (value: string) => void;
  prodBranch: string;
  setProdBranch: (value: string) => void;
  devAnonKey: string;
  setDevAnonKey: (value: string) => void;
  prodAnonKey: string;
  setProdAnonKey: (value: string) => void;
}

const WorkflowForm: React.FC<WorkflowFormProps> = ({
  devSupabase,
  setDevSupabase,
  prodSupabase,
  setProdSupabase,
  devBranch,
  setDevBranch,
  prodBranch,
  setProdBranch,
  devAnonKey,
  setDevAnonKey,
  prodAnonKey,
  setProdAnonKey,
}) => {
  const validateSupabaseUrl = (url: string) => {
    const pattern = /^https:\/\/[a-zA-Z0-9-]+\.supabase\.co$/;
    return pattern.test(url);
  };

  const validateBranchName = (branch: string) => {
    // Check for invalid patterns
    const invalidPatterns = [
      /\s/,          // No spaces
      /\.\./,        // No consecutive dots
      /^\./,         // Cannot start with a dot
      /\.$/,         // Cannot end with a dot
      /^\//,         // Cannot start with slash
      /\/$/,         // Cannot end with slash
      /[~^:?*\[\]\\]/,  // Cannot contain special characters
      /@{/,          // Cannot contain @{
    ];

    return !invalidPatterns.some(pattern => pattern.test(branch));
  };

  const handleDevSupabaseChange = (value: string) => {
    setDevSupabase(value);
  };

  const handleProdSupabaseChange = (value: string) => {
    setProdSupabase(value);
  };

  const isDevUrlValid = !devSupabase || validateSupabaseUrl(devSupabase);
  const isProdUrlValid = !prodSupabase || validateSupabaseUrl(prodSupabase);
  const isDevBranchValid = !devBranch || validateBranchName(devBranch);
  const isProdBranchValid = !prodBranch || validateBranchName(prodBranch);

  return (
    <Card className="p-6 space-y-8 animate-fade-in bg-gray-800/50 border-gray-700">
      {/* Development Environment Section */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-white border-b border-gray-700 pb-2">Development Environment</h3>
        
        <div className="space-y-2">
          <Label htmlFor="devSupabase" className="text-gray-200">Supabase URL</Label>
          {!isDevUrlValid && devSupabase && (
            <p className="text-red-500 text-sm mt-1">URL must be in format: https://your-project.supabase.co</p>
          )}
          <Input
            id="devSupabase"
            placeholder="https://your-dev-project.supabase.co"
            value={devSupabase}
            onChange={(e) => handleDevSupabaseChange(e.target.value)}
            className={`bg-gray-900 border-gray-600 text-white placeholder:text-gray-400 ${!isDevUrlValid ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="devBranch" className="text-gray-200">Branch Name</Label>
          {!isDevBranchValid && devBranch && (
            <p className="text-red-500 text-sm mt-1">Invalid branch name. Branch names cannot contain spaces, special characters, or start/end with dots or slashes.</p>
          )}
          <Input
            id="devBranch"
            placeholder="e.g., development"
            value={devBranch}
            onChange={(e) => setDevBranch(e.target.value)}
            className={`bg-gray-900 border-gray-600 text-white placeholder:text-gray-400 ${!isDevBranchValid ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
          />
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Label htmlFor="devAnonKey" className="text-gray-200">Anon Key</Label>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <HelpCircle className="h-4 w-4 text-gray-400" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Your anon key is completely safe - this form doesn't save anything to a server</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <Input
            id="devAnonKey"
            placeholder="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
            value={devAnonKey}
            onChange={(e) => setDevAnonKey(e.target.value)}
            className="bg-gray-900 border-gray-600 text-white placeholder:text-gray-400 font-mono text-sm"
          />
        </div>
      </div>

      {/* Production Environment Section */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-white border-b border-gray-700 pb-2">Production Environment</h3>
        
        <div className="space-y-2">
          <Label htmlFor="prodSupabase" className="text-gray-200">Supabase URL</Label>
          {!isProdUrlValid && prodSupabase && (
            <p className="text-red-500 text-sm mt-1">URL must be in format: https://your-project.supabase.co</p>
          )}
          <Input
            id="prodSupabase"
            placeholder="https://your-prod-project.supabase.co"
            value={prodSupabase}
            onChange={(e) => handleProdSupabaseChange(e.target.value)}
            className={`bg-gray-900 border-gray-600 text-white placeholder:text-gray-400 ${!isProdUrlValid ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="prodBranch" className="text-gray-200">Branch Name</Label>
          {!isProdBranchValid && prodBranch && (
            <p className="text-red-500 text-sm mt-1">Invalid branch name. Branch names cannot contain spaces, special characters, or start/end with dots or slashes.</p>
          )}
          <Input
            id="prodBranch"
            placeholder="e.g., main"
            value={prodBranch}
            onChange={(e) => setProdBranch(e.target.value)}
            className={`bg-gray-900 border-gray-600 text-white placeholder:text-gray-400 ${!isProdBranchValid ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
          />
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Label htmlFor="prodAnonKey" className="text-gray-200">Anon Key</Label>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <HelpCircle className="h-4 w-4 text-gray-400" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Your anon key is completely safe - this form doesn't save anything to a server</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <Input
            id="prodAnonKey"
            placeholder="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
            value={prodAnonKey}
            onChange={(e) => setProdAnonKey(e.target.value)}
            className="bg-gray-900 border-gray-600 text-white placeholder:text-gray-400 font-mono text-sm"
          />
        </div>
      </div>
    </Card>
  );
};

export default WorkflowForm;