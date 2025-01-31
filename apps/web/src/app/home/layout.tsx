import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { NotesProvider } from "@/context/notes-context";

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
       </main>
      </SidebarProvider>
    </NotesProvider>
  )
}