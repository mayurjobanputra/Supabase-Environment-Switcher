import React from 'react';
import { FormField } from './FormField';
import { validateSupabaseUrl, validateBranchName, validateAnonKey } from '@/utils/formValidation';

interface EnvironmentSectionProps {
  title: string;
  supabaseUrl: string;
  setSupabaseUrl: (value: string) => void;
  branch: string;
  setBranch: (value: string) => void;
  anonKey: string;
  setAnonKey: (value: string) => void;
  environment: string;
}

export const EnvironmentSection: React.FC<EnvironmentSectionProps> = ({
  title,
  supabaseUrl,
  setSupabaseUrl,
  branch,
  setBranch,
  anonKey,
  setAnonKey,
  environment,
}) => {
  const isUrlValid = !supabaseUrl || validateSupabaseUrl(supabaseUrl);
  const isBranchValid = !branch || validateBranchName(branch);
  const isAnonKeyValid = validateAnonKey(anonKey);

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-white border-b border-gray-700 pb-2">{title}</h3>
      
      <FormField
        label="Supabase URL"
        id={`${environment}Supabase`}
        value={supabaseUrl}
        onChange={setSupabaseUrl}
        placeholder={`https://your-${environment}-project.supabase.co`}
        isValid={isUrlValid}
        errorMessage="URL must be in format: https://your-project.supabase.co"
      />

      <FormField
        label="Branch Name"
        id={`${environment}Branch`}
        value={branch}
        onChange={setBranch}
        placeholder={`e.g., ${environment === 'dev' ? 'development' : 'main'}`}
        isValid={isBranchValid}
        errorMessage="Invalid branch name. Branch names cannot contain spaces, special characters, or start/end with dots or slashes."
      />

      <FormField
        label="Anon Key"
        id={`${environment}AnonKey`}
        value={anonKey}
        onChange={setAnonKey}
        placeholder="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
        isValid={isAnonKeyValid}
        errorMessage="Invalid anon key format. It should be a valid JWT token starting with 'eyJ'"
        tooltip="Your anon key is completely safe - this form doesn't save anything to a server"
        isMonospace={true}
      />
    </div>
  );
};