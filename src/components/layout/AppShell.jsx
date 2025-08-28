// src/components/layout/AppShell.jsx
export function AppShell({ children }) {
  return (
    <div id="dashboard-root" className="container mx-auto max-w-7xl px-4 py-8">
      {children}
    </div>
  );
}