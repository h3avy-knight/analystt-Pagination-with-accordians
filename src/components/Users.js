import { useState, useEffect } from "react";
import User from "./User";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [isloading, setIsLodaing] = useState(true);
  const [usersPerPage, setUsersPerPage] = useState(3);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchUsers();
  }, []);
  const fetchUsers = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    setUsers(data);
  };

  const numOfTotalPages = Math.ceil(users.length / usersPerPage);
  const pages = [...Array(numOfTotalPages + 1).keys()].slice(1);
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;

  const visibleUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const prevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };
  const nextPage = () => {
    if (currentPage !== numOfTotalPages) setCurrentPage(currentPage + 1);
  };
  return (
    <>
      {!isloading ? (
        <h1 className="flex items-center justify-center h-screen text-4xl uppercase tracking-widest text-gray-900 lg:text-7xl font-bold">
          Loading...
        </h1>
      ) : (
        <section className="container m-auto">
          {visibleUsers.map((user, i) => (
            <User user={user} key={i} />
          ))}
        </section>
      )}
      <div className=" h-[50px] bottom-0 fixed w-full flex justify-center items-center bg-slate-100">
        <div className="cursor-pointer" onClick={() => prevPage()}>
          <AiOutlineLeft />
        </div>
        <p>
          {pages.map((page) => (
            <span
              className={`mx-6 cursor-pointer ${
                currentPage === page ? "bg-red-400 text-white p-2" : ""
              }`}
              key={page}
              onClick={() => {
                setCurrentPage(page);
              }}
            >
              {page}
            </span>
          ))}
        </p>
        <div className="cursor-pointer" onClick={() => nextPage()}>
          <AiOutlineRight />
        </div>
      </div>
    </>
  );
};

export default Users;
