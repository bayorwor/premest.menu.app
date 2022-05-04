import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { AuthContext } from "../context/auth.context";
import { MenuContext } from "../context/menu.context";

function Home() {
  const { user, success } = useContext(AuthContext);
  const { isPending, menus, error, getAllMenus } = useContext(MenuContext);

  const navigate = useNavigate();

  React.useEffect(() => {
    getAllMenus();
  }, []);

  React.useEffect(() => {
    if (!success) {
      navigate("/");
    }
  }, [success, navigate]);

  return (
    <>
      <Header />
      {isPending && <h2>loading...</h2>}
      <div className="container">
        {menus.map((menu) => (
          <div key={menu._id} className="card border-primary m-3 p-2">
            <div className="card-header">
              <h4 className="text-primary">{menu.name}</h4>
            </div>
            <h4>{menu.type}</h4>
            <h4>{menu.time}</h4>
            <div className="ingredeints-container">
              {menu.ingredients.map((ing) => (
                <span class="badge bg-primary m-2">{ing}</span>
              ))}
            </div>
            <div className="recipe-container">
              {menu.recipe.map((rec) => (
                <span class="badge bg-secondary m-2">{rec}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Home;
