import React from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";

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
  const extractProjectId = (url: string) => {
    const match = url.match(/https:\/\/(.*?)\.supabase\.co/);
    return match ? match[1] : '';
  };

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
    <Card className="p-6 space-y-6 animate-fade-in bg-gray-800/50 border-gray-700">
      <div className="space-y-2">
        <Label htmlFor="devSupabase" className="text-gray-200">Development Supabase URL</Label>
        <Input
          id="devSupabase"
          placeholder="https://your-dev-project.supabase.co"
          value={devSupabase}
          onChange={(e) => handleDevSupabaseChange(e.target.value)}
          className="bg-gray-900 border-gray-600 text-white placeholder:text-gray-400"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="prodSupabase" className="text-gray-200">Production Supabase URL</Label>
        <Input
          id="prodSupabase"
          placeholder="https://your-prod-project.supabase.co"
          value={prodSupabase}
          onChange={(e) => handleProdSupabaseChange(e.target.value)}
          className="bg-gray-900 border-gray-600 text-white placeholder:text-gray-400"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="devBranch" className="text-gray-200">Development Branch Name</Label>
        <Input
          id="devBranch"
          placeholder="e.g., development"
          value={devBranch}
          onChange={(e) => setDevBranch(e.target.value)}
          className="bg-gray-900 border-gray-600 text-white placeholder:text-gray-400"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="prodBranch" className="text-gray-200">Production Branch Name</Label>
        <Input
          id="prodBranch"
          placeholder="e.g., main"
          value={prodBranch}
          onChange={(e) => setProdBranch(e.target.value)}
          className="bg-gray-900 border-gray-600 text-white placeholder:text-gray-400"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="devProjectId" className="text-gray-400 text-sm">Development Project ID</Label>
        <Input
          id="devProjectId"
          value={extractProjectId(devSupabase)}
          readOnly
          className="bg-gray-800 border-gray-700 text-gray-300 mt-1"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="prodProjectId" className="text-gray-400 text-sm">Production Project ID</Label>
        <Input
          id="prodProjectId"
          value={extractProjectId(prodSupabase)}
          readOnly
          className="bg-gray-800 border-gray-700 text-gray-300 mt-1"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="devAnonKey" className="text-gray-200">Development Anon Key</Label>
        <Input
          id="devAnonKey"
          placeholder="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
          value={devAnonKey}
          onChange={(e) => setDevAnonKey(e.target.value)}
          className="bg-gray-900 border-gray-600 text-white placeholder:text-gray-400 font-mono text-sm"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="prodAnonKey" className="text-gray-200">Production Anon Key</Label>
        <Input
          id="prodAnonKey"
          placeholder="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
          value={prodAnonKey}
          onChange={(e) => setProdAnonKey(e.target.value)}
          className="bg-gray-900 border-gray-600 text-white placeholder:text-gray-400 font-mono text-sm"
        />
      </div>
    </Card>
  );
};

export default WorkflowForm;