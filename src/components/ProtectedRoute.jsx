import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoute = ({ authUser, ...rest }) => {;
  return (
    authUser ? <Outlet/> : <Navigate to="/"/>
  );
};

export default ProtectedRoute;


