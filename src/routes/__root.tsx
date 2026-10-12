import { createRootRoute, Outlet } from '@tanstack/react-router'
import { Sidebar } from '../components/global/sidebar'

const RootLayout = () => (
  <div className='flex h-screen bg-[#F4F7FB]'>
    <Sidebar />
    <main className="flex-1 overflow-y-auto p-8">
      <Outlet />
    </main>
  </div>
)

export const Route = createRootRoute({ component: RootLayout })