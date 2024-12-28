
import { memo } from "react";
 
const List = ({users}) => {
  return (
    <>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <h4> {user.name} </h4>
            <button onClick={() => console.log("hjd")} className="btn">
              {" "}
              Remove
            </button>
          </div>
        );
      })}
    </>
  );
};
export default memo(List)