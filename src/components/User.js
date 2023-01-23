import React, { useState } from "react";

const User = ({ user }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`w-full my-8 flex items-center justify-center  bg-white p-6 drop-shadow-lg ${
        open ? "h-full flex-col" : "h-[200px]"
      }`}
      style={{ borderRadius: "20px" }}
    >
      <div className=" w-full flex items-center justify-between">
        <h1 className="font-light pl-3">{user.name}</h1>
        <div>
          <h1 className="font-bold">CONTACT</h1>
          <h1>{user.username}</h1>
        </div>
        <div>
          <h1 className="font-bold">CITY</h1>
          <h1>{user?.address?.city}</h1>
        </div>
        <div>
          <h1 className="font-bold">STATE</h1>
          <h1>{user?.address?.street}</h1>
        </div>
        <button
          className="rounded-full bg-red-600 text-white px-3 py-3"
          // onClick={() => console.log(user.id)}
          onClick={() => {
            setOpen(!open);
          }}
        >
          {open ? "Hide Details" : "View Details"}
        </button>
      </div>
      {open ? (
        <div className="bg-white mt-5 ">
          <div className="p-5 border rounded-md	shadow-lg">
            <h1 className="font-bold">Descriptions</h1>
            <p>
              Providing service of domestic flight booking @ lowest price
              gurenteed and also for railway e ticket booking. also offering
              international flight tickets. giving services to our customers
              since 1995. now going to start hajj ang umrah very soon for our
              valuable customers it will be also @ very affordable price.
            </p>
            <div className="flex mt-5 items-center">
              <div>
                <div>
                  <h1 className="font-bold my-3">Contact Person</h1>
                  <h1 className="font-bold"></h1>
                  {user.name}
                </div>
                <div>
                  <h1 className="font-bold mb-3">Designation</h1>
                  {user?.company?.catchPhrase}
                </div>
                <div>
                  <h1 className="font-bold mb-3">Emails</h1>
                  {user.email}
                </div>
                <div>
                  <h1 className="font-bold mb-3">Phones</h1>
                  {user.phone}
                </div>
              </div>
              <div className="ml-8">
                <div>
                  <h1 className="font-bold mb-3">Address</h1>
                  {user.address.city} {user.address.street}.
                </div>
                <div>
                  <h1 className="font-bold mb-2">City</h1>
                  {user.address.city}
                </div>
                <div>
                  <h1 className="font-bold mb-2">State</h1>
                  {user.address.city}
                </div>
                <div>
                  <h1 className="font-bold mb-2">Country</h1>
                  {user.address.street}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default User;
