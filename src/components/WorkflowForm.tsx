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
}) => {
  return (
    <Card className="p-6 space-y-6 animate-fade-in bg-gray-800/50 border-gray-700">
      <div className="space-y-2">
        <Label htmlFor="devSupabase" className="text-gray-200">Development Supabase Project Name/URL</Label>
        <Input
          id="devSupabase"
          placeholder="e.g., my-dev-project or https://my-dev-project.supabase.co"
          value={devSupabase}
          onChange={(e) => setDevSupabase(e.target.value)}
          className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="prodSupabase" className="text-gray-200">Production Supabase Project Name/URL</Label>
        <Input
          id="prodSupabase"
          placeholder="e.g., my-prod-project or https://my-prod-project.supabase.co"
          value={prodSupabase}
          onChange={(e) => setProdSupabase(e.target.value)}
          className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="devBranch" className="text-gray-200">Development Branch Name</Label>
        <Input
          id="devBranch"
          placeholder="e.g., development"
          value={devBranch}
          onChange={(e) => setDevBranch(e.target.value)}
          className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="prodBranch" className="text-gray-200">Production Branch Name</Label>
        <Input
          id="prodBranch"
          placeholder="e.g., main"
          value={prodBranch}
          onChange={(e) => setProdBranch(e.target.value)}
          className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400"
        />
      </div>
    </Card>
  );
};

export default WorkflowForm;