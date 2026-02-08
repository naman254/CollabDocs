# CollabDocs - Real time Collaborative Editor

A powerful, real-time collaborative document editor, built with Next.js 15, Convex, and Liveblocks.

[![Live Demo](https://img.shields.io/badge/demo-live-green.svg)](https://collab-docs-9ahj.vercel.app/) ---

## ✨ Features

- **Real-time Collaboration**: Multi-user editing with live cursors and presence indicators powered by Liveblocks.
- **Advanced Rich Text Editing**: Comprehensive Tiptap integration including:
  - Tables, Images (resizable), and Task Lists.
  - Text alignment, font families, and custom colors.
  - Highlighting and complex formatting.
- **Document Management**:
  - Personal dashboard to create, rename, and delete documents.
  - Template gallery (Resume, Letter, Project Proposal, etc.) for quick starts.
  - Organization-based access control.
- **Comments & Mentions**: Threaded comments and @user mentions for seamless feedback.
- **Authentication**: Secure login and organization management via Clerk.
- **Responsive Design**: Fully optimized for desktop and mobile with a custom sidebar and toolbars.
- **Database & Sync**: High-performance backend and real-time data syncing using Convex.

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Backend/Database**: [Convex](https://www.convex.dev/)
- **Collaboration**: [Liveblocks](https://liveblocks.io/)
- **Auth**: [Clerk](https://clerk.com/)
- **Editor**: [Tiptap](https://tiptap.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [Shadcn UI](https://ui.shadcn.com/) (Radix UI)
- **State Management**: [Zustand](https://github.com/pmndrs/zustand)

## 🏁 Getting Started

### Prerequisites
- Node.js 18+ 
- A Convex account
- A Clerk account
- A Liveblocks account

### Installation

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/your-username/collabdocs.git](https://github.com/your-username/collabdocs.git)
   cd collabdocs

2. **Install dependencies:**
   ``` bash
   npm install
3. **Set up environment variables: Create a .env.local file in the root directory and add your keys:**
   ``` bash
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
   CLERK_SECRET_KEY=
   NEXT_PUBLIC_CONVEX_URL=
   LIVEBLOCKS_SECRET_KEY=
4. **Run the development server:**
   ``` bash
   npm run dev
5. **Start Convex backend:**
   ``` bash
   npx convex dev
  
   
