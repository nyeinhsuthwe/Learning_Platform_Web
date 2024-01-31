import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div>
      <h1 className="bg-green-400">
        <Outlet />
      </h1>
    </div>
  );
};

export default AdminLayout;
