import Hero from "./component/Hero";
import { FloatingNav } from "./component/ui/FloatingNav";
import Grid from "./component/Grid";
// import RecentProjects from "./component/RecentProjects";
import ParentComponent from "./component/ParentComponent";
import { navItems } from "@/data";
import Client from "./component/Client";
import Experience from "./component/Experience";
import  Approch  from "./component/Approch";
import Footer from "./component/Footer";


export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col
    mx-auto sm:px-10 px-5 overflow-clip
    ">
      <div className="max-w-7xl w-full" >
        <FloatingNav
          navItems={navItems} />
        <Hero />
        <Grid />
        <ParentComponent/>
        <Client />
        <Experience />
        <Approch />
        <Footer />
      </div>
    </main>
  );
}
