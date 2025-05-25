import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "@/features/profile/profileSlice";
import Roadmap from "@shared/ui/custom/roadmap";
import { Link } from "react-router";

const Profile = () => {
  const user = useSelector((state) => state.profile.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProfile());
  }, []);

  return (
    <div className="px-[3%] md:px-[10%] space-y-15 py-10">
      <Roadmap road="Home" page="My Account" />
      <div className="flex flex-col md:flex-row">
        <aside className="w-full md:w-1/4 text-sm text-gray-700">
          <div className="mb-6">
            <h3 className="font-semibold mb-2">Manage My Account</h3>
            <ul className="space-y-1">
              <li className="text-red-500 font-medium">My Profile</li>
              <li className="text-gray-500">Address Book</li>
              <li className="text-gray-500">My Payment Options</li>
            </ul>
          </div>
          <div className="mb-6">
            <Link to="/checkout">
              <h3 className="font-semibold mb-2">My Orders</h3>
            </Link>
            <ul className="space-y-1">
              <li className="text-gray-500">My Returns</li>
              <li className="text-gray-500">My Cancellations</li>
            </ul>
          </div>
          <div>
            <Link to="/wishlist">
              <h3 className="font-semibold mb-2">My Wishlist</h3>
            </Link>
          </div>
        </aside>

        <div className="flex-1 md:ml-10 mt-6 md:mt-0">
          <h2 className="text-xl font-semibold text-red-500 mb-6">Profile</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <input type="text" placeholder="First name" value={user.firstName} className="border border-gray-300 rounded px-4 py-2 w-full" />
            <input type="text" placeholder="Last name" value={user.lastName} className="border border-gray-300 rounded px-4 py-2 w-full" />
            <input type="email" placeholder="Email address" value={user.email} className="border border-gray-300 rounded px-4 py-2 w-full" />
            <input type="text" placeholder="Phone number" value={user.phoneNumber} className="border border-gray-300 rounded px-4 py-2 w-full" />
          </div>

          <div className="mb-4">
            <h3 className="text-md font-medium text-gray-700 mb-2">Password Changes</h3>
            <input type="password" placeholder="Current password" className="border border-gray-300 rounded px-4 py-2 w-full mb-3" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="password" placeholder="New password" className="border border-gray-300 rounded px-4 py-2 w-full" />
              <input type="password" placeholder="Confirm new password" className="border border-gray-300 rounded px-4 py-2 w-full" />
            </div>
          </div>

          <div className="flex justify-end space-x-4 mt-6">
            <button className="text-gray-600 hover:text-gray-900">Cancel</button>
            <button className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600">Save Changes</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
