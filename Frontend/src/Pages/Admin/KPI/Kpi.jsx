import { useState } from 'react';
import TabButton from '../../../Components/UI/TabButton';
import KpiList from './KpiList';
import RegisterKpi from './RegisterKpi';

const KpiManagement = () => {
  const [activeTab, setActiveTab] = useState('list');

  const tabs = [
    { key: 'list', label: 'Lists' },
    { key: 'addKpi', label: 'Register KPI' },
    { key: 'addKpiCategory', label: 'Register KPI Category' },
    { key: 'addKpiUnit', label: 'Register Unit' },
  ];

  return (
    <div className="flex-1 overflow-y-auto bg-background ">
      <div className="flex-1 flex flex-col">
        <main className="flex-1 p-6 space-y-8 overflow-y-auto">
          <h1 className="text-2xl font-bold">KPI Management</h1>

          {/* Tabs */}
          <div className="flex gap-2">
            {tabs.map((tab) => (
              <TabButton key={tab.key} label={tab.label} value={tab.key} activeValue={activeTab} onChange={setActiveTab} />
            ))}
          </div>

          {activeTab === 'list' && <KpiList />}
          {activeTab === 'addKpi' && <RegisterKpi setActiveTab={setActiveTab} />}
          {activeTab === 'addKpiCategory' && <div>Register KpiCategory</div>}
          {activeTab === 'addKpiUnit' && <div>Register KpiUnit</div>}
        </main>
      </div>
    </div>
  );
};

export default KpiManagement;
