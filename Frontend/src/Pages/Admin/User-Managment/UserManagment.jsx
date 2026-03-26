import { useState } from "react";
import AddUser from "./AddUser";
import UserList from "./UserList";

const UserManagement = () => {
  const [activeTab, setActiveTab] = useState("list");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="flex-1 flex overflow-y-auto  bg-background">
      <div className="flex-1 flex flex-col">
        <main className="p-6">
          <h1 className="text-2xl font-bold mb-5">User Management</h1>

          {/* Tabs */}
          <div className="flex gap-2 mb-6">
            <button
              onClick={() => setActiveTab("list")}
              className={`px-5 py-2 rounded-lg border ${
                activeTab === "list"
                  ? "bg-blue-600 text-white"
                  : "bg-white border-gray-300"
              }`}
            >
              List of Users
            </button>

            <button
              onClick={() => setActiveTab("add")}
              className={`px-5 py-2 rounded-lg border ${
                activeTab === "add"
                  ? "bg-blue-600 text-white"
                  : "bg-white border-gray-300"
              }`}
            >
              Add User
            </button>
          </div>

          {/* LIST */}
          {activeTab === "list" && (
            <UserList
              setSearchQuery={setSearchQuery}
              searchQuery={searchQuery}
              setActiveTab={setActiveTab}
            />
          )}

          {/* ADD */}
          {activeTab === "add" && <AddUser setActiveTab={setActiveTab} />}
        </main>
      </div>
    </div>
  );
};

export default UserManagement;
