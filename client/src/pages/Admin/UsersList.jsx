import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteUsersList, getUsersList } from "../../actions/adminAction";
import Error from "../../components/Error";
import Loading from "../../components/Loading";

export default function UserList() {
  const usersstate = useSelector((state) => state.getUsersListReducer);
  const { users, error, loading } = usersstate;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsersList());
  }, []);

  return (
    <>
      <h2
        style={{
          margin: "0vh 10vh",
          fontSize: "25px",
          backgroundColor: "red",
          color: "white",
          padding: "15px",
        }}
      >
        Users List
      </h2>

      <div
        className="flex-container"
        style={{
          color: "white",
          margin: "2px 50px",
          padding: "10px 5px",
          border: "2px solid gray",
          fontSize: "25px",
          backgroundColor: "gray",
        }}
      >
        <div className="w-100">User ID</div>
        <div className="w-100">Name</div>
        <div className="w-100">Email</div>
        <div className="w-100">Delete</div>
      </div>

      <div
        className="rows items justify-content-center"
        style={{ width: "100%" }}
      >
        {loading ? (
          <Loading />
        ) : error ? (
          <Error error="Something went wrong 😥" />
        ) : (
          users.map((user) => {
            return (
              <div className="col-md-9 m-0 p-2 w-100 " key={user._id}>
                <div
                  className="flex-container p-4"
                  style={{ margin: "10px 50px", border: "2px solid gray" }}
                >
                  <div className="w-100">{user._id}</div>
                  <div className="w-100">{user.name}</div>
                  <div className="w-100">{user.email}</div>
                  <div className="w-100">
                    <button className="btn">
                      <i
                        style={{ color: "white" }}
                        className="fa fa-trash"
                        aria-hidden="true"
                        onClick={() => {
                          dispatch(deleteUsersList({ user }));
                        }}
                      ></i>
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </>
  );
}
