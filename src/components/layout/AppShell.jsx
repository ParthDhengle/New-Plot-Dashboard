function AppShell({ children }) {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div id="dashboard-root" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </div>
  )
}

export default AppShell
