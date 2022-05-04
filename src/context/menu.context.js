import { useState, createContext, useContext } from "react";
import { AuthContext } from "./auth.context";

const MenuContext = createContext();

const MenuProvider = MenuContext.Provider;

const MenuContextProvider = ({ children }) => {
  const [menus, setMenus] = useState([]);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  const { user } = useContext(AuthContext);

  async function getAllMenus() {
    setIsPending(true);
    await fetch("/api/foods", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${user.token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMenus(data);
      })
      .catch((err) => {
        setError(err);
      });
    setIsPending(false);
  }

  return (
    <MenuProvider
      value={{
        isPending,
        error,
        menus,
        getAllMenus,
      }}
    >
      {children}
    </MenuProvider>
  );
};

export { MenuContext, MenuContextProvider };
