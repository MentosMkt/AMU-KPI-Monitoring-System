import { useState } from 'react';
import AddUser from './AddUser';
import UserList from './UserList';
import TabButton from '../../../Components/UI/TabButton';

const UserManagement = () => {
  const [activeTab, setActiveTab] = useState('list');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="flex-1 flex overflow-y-auto  bg-background">
      <div className="flex-1 flex flex-col">
        <main className="p-6">
          <h1 className="text-2xl font-bold mb-5">User Management</h1>

          {/* Tabs */}
          <div className="flex gap-2 mb-6">
            <TabButton label="List of Users" value="list" activeValue={activeTab} onChange={setActiveTab} />
            <TabButton label="Add" value="add" activeValue={activeTab} onChange={setActiveTab} />
          </div>

          {/* LIST */}
          {activeTab === 'list' && <UserList setSearchQuery={setSearchQuery} searchQuery={searchQuery} setActiveTab={setActiveTab} />}

          {/* ADD */}
          {activeTab === 'add' && <AddUser setActiveTab={setActiveTab} />}
        </main>
      </div>
    </div>
  );
};

export default UserManagement;
