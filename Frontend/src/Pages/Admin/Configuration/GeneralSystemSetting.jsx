import { Upload } from 'lucide-react';
import { Input } from '../../../Components/UI/Input';
import { Label } from '../../../Components/UI/Label';
import { Switch } from '../../../Components/UI/Switch';

function GeneralSystemSetting({ maintenanceMode, settings, setSettings, setMaintenanceMode, systemOnline, setSystemOnline }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 ">
      {/* General System Settings */}
      <div className="lg:col-span-2 space-y-6">
        <div className="bg-card rounded-xl border border-border p-6 space-y-5">
          <h2 className="text-lg font-semibold text-foreground">General System Settings</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <Label className="text-xs text-muted-foreground">System Display Name</Label>
              <Input
                placeholder="Enter Your Name"
                value={settings.displayName}
                onChange={(e) =>
                  setSettings({
                    ...settings,
                    displayName: e.target.value,
                  })
                }
              />
            </div>
            <div className="space-y-1.5">
              <Label className="text-xs text-muted-foreground">Organization Name</Label>
              <Input placeholder="Enter Your Name" value={settings.orgName} onChange={(e) => setSettings({ ...settings, orgName: e.target.value })} />
            </div>
            <div className="space-y-1.5">
              <Label className="text-xs text-muted-foreground">Date Format Preference</Label>
              <Input
                value={settings.dateFormat}
                onChange={(e) =>
                  setSettings({
                    ...settings,
                    dateFormat: e.target.value,
                  })
                }
              />
            </div>
            <div className="space-y-1.5">
              <Label className="text-xs text-muted-foreground">System Version</Label>
              <Input value={settings.systemVersion} readOnly className="bg-muted/50" />
            </div>
          </div>
        </div>

        {/* Upload Logo */}
        <div className="bg-card rounded-xl border border-border p-6 space-y-4">
          <h2 className="text-lg font-semibold text-foreground">Upload Logo</h2>
          <div className="border-2 border-dashed border-border rounded-xl p-10 flex flex-col items-center justify-center gap-2 hover:border-primary/50 transition-colors cursor-pointer">
            <Upload className="w-8 h-8 text-muted-foreground" />
            <p className="text-sm text-muted-foreground font-medium">Click to upload or drag and drop</p>
            <p className="text-xs text-muted-foreground">SVG, PNG, JPG, GIF (MAX. 800×400px, 2MB)</p>
          </div>
        </div>
      </div>

      {/* System Accessibility */}
      <div className="space-y-4">
        <div className="bg-card rounded-xl border border-border p-6 space-y-5">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-foreground">System Accessibility</span>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-foreground">Maintenance Mode</p>
                <p className="text-xs text-muted-foreground">All user actions will be disabled.</p>
              </div>
              <Switch checked={maintenanceMode} onCheckedChange={setMaintenanceMode} />
            </div>
            <div className="flex items-start gap-2">
              <input type="checkbox" />
              <div>
                <p className="text-sm font-medium text-foreground">System Online</p>
                <p className="text-xs text-muted-foreground">The Portal is fully accessible to all employees and evaluators.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GeneralSystemSetting;
