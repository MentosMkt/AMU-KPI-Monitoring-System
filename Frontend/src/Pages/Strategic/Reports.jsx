import React from 'react';
import { Card, CardContent, } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Download } from "lucide-react";

const reports = [
  { id: 1, title: "Q1 2024 Performance Report", date: "Mar 31, 2024", type: "Quarterly" },
  { id: 2, title: "Annual KPI Achievement Report", date: "Dec 31, 2023", type: "Annual" },
  { id: 3, title: "Faculty Comparison Analysis", date: "Feb 15, 2024", type: "Analysis" },
  { id: 4, title: "Research Output Summary", date: "Mar 01, 2024", type: "Summary" },
];

const Reports = () => (
  React.createElement('div', { className: "space-y-6",}
    , React.createElement('div', { className: "flex items-center justify-between"  ,}
      , React.createElement('div', null
        , React.createElement('h1', { className: "text-2xl font-bold text-foreground"  ,}, "Reports")
        , React.createElement('p', { className: "text-sm text-muted-foreground" ,}, "Generate and download performance reports"    )
      )
      , React.createElement(Button, { className: "gap-2",}, React.createElement(FileText, { className: "w-4 h-4" ,} ), " Generate Report"  )
    )
    , React.createElement('div', { className: "space-y-3",}
      , reports.map((r) => (
        React.createElement(Card, { key: r.id,}
          , React.createElement(CardContent, { className: "p-4 flex items-center justify-between"   ,}
            , React.createElement('div', { className: "flex items-center gap-4"  ,}
              , React.createElement('div', { className: "w-10 h-10 rounded-lg bg-accent flex items-center justify-center"      ,}
                , React.createElement(FileText, { className: "w-5 h-5 text-primary"  ,} )
              )
              , React.createElement('div', null
                , React.createElement('p', { className: "font-medium text-foreground" ,}, r.title)
                , React.createElement('p', { className: "text-sm text-muted-foreground" ,}, r.date, " · "  , r.type)
              )
            )
            , React.createElement(Button, { variant: "outline", size: "sm", className: "gap-2",}, React.createElement(Download, { className: "w-4 h-4" ,} ), " Download" )
          )
        )
      ))
    )
  )
);

export default Reports;
