export const validateSupabaseUrl = (url: string) => {
  const pattern = /^https:\/\/[a-zA-Z0-9-]+\.supabase\.co$/;
  return pattern.test(url);
};

export const validateBranchName = (branch: string) => {
  const invalidPatterns = [
    /\s/,          
    /\.\./,        
    /^\./,         
    /\.$/,         
    /^\//,         
    /\/$/,         
    /[~^:?*\[\]\\]/,  
    /@{/,          
  ];

  return !invalidPatterns.some(pattern => pattern.test(branch));
};

export const validateAnonKey = (key: string) => {
  const pattern = /^eyJ[A-Za-z0-9-_=]+\.[A-Za-z0-9-_=]+\.?[A-Za-z0-9-_.+/=]*$/;
  return !key || pattern.test(key);
};