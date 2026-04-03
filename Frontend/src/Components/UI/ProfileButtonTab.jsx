import React, { useState } from 'react';
import { cn } from '../../lib/utils';

// Root Tabs
export const Tabs = ({ defaultValue, children }) => {
  const [activeTab, setActiveTab] = useState(defaultValue);

  // Clone children and pass state
  return React.Children.map(children, (child) => React.cloneElement(child, { activeTab, setActiveTab }));
};

// Tabs List
export const TabsList = ({ children, className = '', activeTab, setActiveTab }) => {
  return (
    <div className={cn('inline-flex h-10 items-center justify-center rounded-md bg-muted p-1', className)}>
      {React.Children.map(children, (child) => React.cloneElement(child, { activeTab, setActiveTab }))}
    </div>
  );
};

// Trigger (Tab Button)
export const TabsTrigger = ({ value, children, activeTab, setActiveTab, className = '' }) => {
  const isActive = activeTab === value;

  return (
    <button
      onClick={() => setActiveTab(value)}
      className={cn('px-3 py-1.5 text-sm rounded-sm transition', isActive ? 'bg-white text-black shadow-sm' : 'text-muted-foreground', className)}
    >
      {children}
    </button>
  );
};

// Content
export const TabsContent = ({ value, children, activeTab, className = '' }) => {
  if (activeTab !== value) return null;

  return <div className={cn('mt-2', className)}>{children}</div>;
};
