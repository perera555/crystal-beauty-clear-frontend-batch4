import { useEffect, useState } from "react";
import { Edit, Trash2, Search } from "react-icons";

export default function UsersPage() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  // Example fetch from backend API
  useEffect(() => {
    async function fetchUsers() {
      try {
        const res = await fetch("http://localhost:5000/api/users");
        const data = await res.json();
        setUsers(data);
      } catch (err) {
        console.error("Error fetching users:", err);
      }
    }
    fetchUsers();
  }, []);

  return (
    <div className="p-6 w-full">
      {/* Title */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Users</h1>
        <button className="px-4 py-2 bg-indigo-600 text-white rounded-xl shadow hover:bg-indigo-700">
          + Add User
        </button>
      </div>

      {/* Search Bar */}
      <div className="flex items-center mb-4 border rounded-xl px-3 py-2 bg-gray-100 w-full md:w-1/3">
        <Search className="w-5 h-5 text-gray-500" />
        <input
          type="text"
          placeholder="Search users..."
          className="ml-2 w-full bg-transparent outline-none"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Users Table */}
      <div className="overflow-x-auto">
        <table className="w-full bg-white rounded-xl shadow-md">
          <thead className="bg-gray-100 text-gray-600 uppercase text-sm">
            <tr>
              <th className="p-4 text-left">Name</th>
              <th className="p-4 text-left">Email</th>
              <th className="p-4 text-left">Role</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users
              .filter((u) =>
                u.firstName.toLowerCase().includes(search.toLowerCase())
              )
              .map((u) => (
                <tr
                  key={u._id}
                  className="border-b hover:bg-gray-50 transition"
                >
                  <td className="p-4 font-medium flex items-center gap-2">
                    <img
                      src={`https://ui-avatars.com/api/?name=${u.firstName}+${u.lastName}`}
                      alt={u.firstName}
                      className="w-8 h-8 rounded-full"
                    />
                    {u.firstName} {u.lastName}
                  </td>
                  <td className="p-4">{u.email}</td>
                  <td className="p-4">
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${
                        u.role === "Admin"
                          ? "bg-red-100 text-red-600"
                          : "bg-green-100 text-green-600"
                      }`}
                    >
                      {u.role}
                    </span>
                  </td>
                  <td className="p-4">
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${
                        u.active
                          ? "bg-green-100 text-green-600"
                          : "bg-gray-200 text-gray-600"
                      }`}
                    >
                      {u.active ? "Active" : "Inactive"}
                    </span>
                  </td>
                  <td className="p-4 text-right flex justify-end gap-2">
                    <button className="p-2 rounded-full hover:bg-gray-100">
                      <Edit className="w-5 h-5 text-blue-600" />
                    </button>
                    <button className="p-2 rounded-full hover:bg-gray-100">
                      <Trash2 className="w-5 h-5 text-red-600" />
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-6 text-sm text-gray-500">
        <span>Showing 1-10 of {users.length}</span>
        <div className="flex gap-2">
          <button className="px-3 py-1 border rounded-lg hover:bg-gray-100">
            Prev
          </button>
          <button className="px-3 py-1 border rounded-lg hover:bg-gray-100">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
