import React from 'react';
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { Copy } from "lucide-react";

interface CodePreviewProps {
  code: string;
}

const CodePreview: React.FC<CodePreviewProps> = ({ code }) => {
  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    toast({
      title: "Copied to clipboard",
      description: "The workflow file has been copied to your clipboard.",
    });
  };

  return (
    <div className="relative rounded-lg bg-editor-bg p-4 animate-fade-in">
      <Button
        variant="outline"
        size="icon"
        className="absolute top-4 right-4 hover:bg-gray-700"
        onClick={handleCopy}
      >
        <Copy className="h-4 w-4" />
      </Button>
      <pre className="font-mono text-sm text-editor-text overflow-x-auto">
        <code>{code}</code>
      </pre>
    </div>
  );
};

export default CodePreview;