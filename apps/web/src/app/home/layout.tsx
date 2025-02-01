import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { NotesProvider } from "@/context/notes-context";
import { Toaster } from "@/components/ui/toaster";

export default function HomeLayout({
  children
}: { children: React.ReactNode }){
  return (
    <NotesProvider>
      <SidebarProvider>
        <AppSidebar/>
       <main className="w-full min-h-screen flex ">
        <SidebarTrigger/>
        {children}
        <Toaster/>
       </main>
      </SidebarProvider>
    </NotesProvider>
  )
}