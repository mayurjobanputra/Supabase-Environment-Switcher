# Supabase Environment Switcher

A tool that generates GitHub Actions workflows to automatically switch between development and production Supabase environments during pull requests.

## Overview

This tool simplifies the process of managing multiple Supabase environments in your development workflow. It automatically generates a GitHub Actions workflow that handles the switching between your development and production Supabase environments when creating pull requests.

## Features

- 🔄 Automatic environment switching during pull requests
- 🔒 Secure handling of environment variables
- 🔍 Smart detection and replacement of Supabase URLs and project IDs
- ⚡ Browser-based workflow generation
- 🛡️ No server-side processing - all data stays in your browser

## How It Works

When you create a pull request from your development branch to your production branch, the generated workflow will:

1. Search through your codebase for the development Supabase URL
2. Replace it with your production Supabase URL
3. Update any project IDs and anon keys automatically
4. Commit these changes back to your pull request

### Technical Details

- Uses GitHub Actions' powerful file manipulation capabilities
- Searches through multiple file types (.js, .ts, .env)
- Handles both full URLs and project IDs
- Maintains your environment variables securely
- Runs only on pull requests to your production branch

### ⚠️ Important Note About Database Sync

While this workflow helps switch between development and production environments during pull requests, it does not handle database schema or data synchronization. You'll need to manage database migrations separately using:

- Supabase Database Branching
- Manual migrations
- Other database synchronization methods

This ensures your production database schema matches your development environment.

## Best Practices

1. **Review Changes**: Always review the automated changes before merging pull requests
2. **Branch Protection**: Keep your production branch protected
3. **Environment Branches**: Use environment-specific branches for development
4. **Schema Sync**: Regularly update your development environment to match production schema
5. **Testing**: Test the workflow thoroughly in a non-production environment first

## Getting Started

1. Visit the tool at [URL]
2. Enter your Supabase development and production environment details
3. Configure your branch names
4. Generate your workflow
5. Copy the generated workflow to your repository's `.github/workflows` directory

## Security

- All processing happens in your browser
- No data is sent to any server
- Your credentials and environment variables never leave your device
- The tool only generates the workflow file - you maintain full control over its implementation

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see below for details:

```
MIT License

Copyright (c) 2024 [Your Name]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## Disclaimer

This tool is provided as-is without any warranties or guarantees. While it has been tested extensively, we take no responsibility for any issues that may arise from its use. Always review the generated workflow and test thoroughly before deploying to production.

## Support

For questions, updates, or more tools, follow me on [Twitter](https://mayur.ca/x).

## Tech Stack

- React
- TypeScript
- Tailwind CSS
- shadcn/ui

---

Made with ❤️ by Mayur