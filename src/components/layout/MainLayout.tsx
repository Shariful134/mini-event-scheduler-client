import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="container mx-auto min-h-screen  text-gray-900 ">
      <header className="p-4 text-center bg-green-600 text-white text-xl font-semibold">
        Mini Event Scheduler with AI Categorization
      </header>
      <main className="p-4">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
