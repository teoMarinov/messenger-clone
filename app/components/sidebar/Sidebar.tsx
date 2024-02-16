import DesktopSidebar from "./DesktopSidebar";
import MobileFooter from "./MobileFooter";
import getCurrentUser from "@/app/actions/getCurrentUser";

async function Sidebar({ children }: { children: React.ReactNode }) {
  const currentUser = await getCurrentUser();
  return (
    <div className="h-full" >
      <DesktopSidebar currentUser={currentUser!} />
      <MobileFooter />
      <main className="xl:pl-20 h-full">{children}</main>
    </div>
  );
}

Sidebar.propTypes = {};

export default Sidebar;
