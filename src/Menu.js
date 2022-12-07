import "./App.css";
import { activeItems, inactiveItems } from "./data/items";
import Item from "./components/Item";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";

function Menu() {
  const navigate = useNavigate();
  const handleOnClick = useCallback(
    () => navigate("/graph", { replace: true }),
    [navigate]
  );

  return (
    <div>
      <button type="button" className="button" onClick={handleOnClick}>
        Go To Graph
      </button>
      <>
        <Item item={activeItems} type="active" />
      </>
      <>
        <Item item={inactiveItems} type="inactive" />
      </>
      <style jsx="true">{`
        .button {
          position: absolute;
          left: 40%;
          top: 0.5rem;
          background-color: orange;
          color: white;
          padding: 0.5rem;
          border-radius: 5px;
          font-weight: bold;
        }
      `}</style>
    </div>
  );
}

export default Menu;
