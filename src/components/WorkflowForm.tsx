import React from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { QuestionMarkCircle } from "lucide-react";
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

  const handleDevSupabaseChange = (value: string) => {
    setDevSupabase(value);
    if (value && !validateSupabaseUrl(value)) {
      console.error('Invalid Supabase URL format. Must be https://xxxx.supabase.co');
    }
  };

  const handleProdSupabaseChange = (value: string) => {
    setProdSupabase(value);
    if (value && !validateSupabaseUrl(value)) {
      console.error('Invalid Supabase URL format. Must be https://xxxx.supabase.co');
    }
  };

  return (
    <Card className="p-6 space-y-8 animate-fade-in bg-gray-800/50 border-gray-700">
      {/* Development Environment Section */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-white border-b border-gray-700 pb-2">Development Environment</h3>
        
        <div className="space-y-2">
          <Label htmlFor="devSupabase" className="text-gray-200">Supabase URL</Label>
          <Input
            id="devSupabase"
            placeholder="https://your-dev-project.supabase.co"
            value={devSupabase}
            onChange={(e) => handleDevSupabaseChange(e.target.value)}
            className="bg-gray-900 border-gray-600 text-white placeholder:text-gray-400"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="devBranch" className="text-gray-200">Branch Name</Label>
          <Input
            id="devBranch"
            placeholder="e.g., development"
            value={devBranch}
            onChange={(e) => setDevBranch(e.target.value)}
            className="bg-gray-900 border-gray-600 text-white placeholder:text-gray-400"
          />
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Label htmlFor="devAnonKey" className="text-gray-200">Anon Key</Label>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <QuestionMarkCircle className="h-4 w-4 text-gray-400" />
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
          <Input
            id="prodSupabase"
            placeholder="https://your-prod-project.supabase.co"
            value={prodSupabase}
            onChange={(e) => handleProdSupabaseChange(e.target.value)}
            className="bg-gray-900 border-gray-600 text-white placeholder:text-gray-400"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="prodBranch" className="text-gray-200">Branch Name</Label>
          <Input
            id="prodBranch"
            placeholder="e.g., main"
            value={prodBranch}
            onChange={(e) => setProdBranch(e.target.value)}
            className="bg-gray-900 border-gray-600 text-white placeholder:text-gray-400"
          />
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Label htmlFor="prodAnonKey" className="text-gray-200">Anon Key</Label>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <QuestionMarkCircle className="h-4 w-4 text-gray-400" />
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