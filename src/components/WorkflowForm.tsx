import React from 'react';
import { Card } from "@/components/ui/card";
import { EnvironmentSection } from './form/EnvironmentSection';

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
  return (
    <Card className="p-6 space-y-8 animate-fade-in bg-gray-800/50 border-gray-700">
      <EnvironmentSection
        title="Development Environment"
        supabaseUrl={devSupabase}
        setSupabaseUrl={setDevSupabase}
        branch={devBranch}
        setBranch={setDevBranch}
        anonKey={devAnonKey}
        setAnonKey={setDevAnonKey}
        environment="dev"
      />
      
      <EnvironmentSection
        title="Production Environment"
        supabaseUrl={prodSupabase}
        setSupabaseUrl={setProdSupabase}
        branch={prodBranch}
        setBranch={setProdBranch}
        anonKey={prodAnonKey}
        setAnonKey={setProdAnonKey}
        environment="prod"
      />
    </Card>
  );
};

export default WorkflowForm;