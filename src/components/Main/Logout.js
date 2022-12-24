import { useStoreActions } from "easy-peasy"
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const redirect = useNavigate();
  const logout = useStoreActions((action) => action.logout);

  useEffect(() => {
    logout();
    redirect('/');
  }, [logout, redirect])

  return (
    <>
      <h1>Logout success.</h1>
    </>
  )
}

export default Logout