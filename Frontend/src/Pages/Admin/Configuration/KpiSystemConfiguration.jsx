import { Input } from "../../../Components/UI/Input";
import { Label } from "../../../Components/UI/Label";

function KpiSystemConfiguration({ settings, setSettings }) {
  return (
    <div className="bg-card rounded-xl border border-border p-6 space-y-5">
      <div>
        <h2 className="text-lg font-semibold text-foreground">
          KPI System Configuration
        </h2>
        <p className="text-sm text-muted-foreground">
          Governance & Constraints
        </p>
      </div>
      <div className="grid grid-cols-2 gap-x-6 gap-y-4">
        <div className="space-y-1.5">
          <Label className="text-xs text-muted-foreground">
            KPI Weight Validation
          </Label>
          <Input
            value={settings.kpiWeightValidation}
            onChange={(e) =>
              setSettings({
                ...settings,
                kpiWeightValidation: e.target.value,
              })
            }
          />
          <p className="text-xs text-muted-foreground">
            Strict: Total must equal 100% | Loose: No total requirement.
          </p>
        </div>
        <div className="space-y-1.5">
          <Label className="text-xs text-muted-foreground">
            Max KPIs per User
          </Label>
          <Input
            placeholder="Enter Your Name"
            value={settings.maxKpisPerUser}
            onChange={(e) =>
              setSettings({
                ...settings,
                maxKpisPerUser: e.target.value,
              })
            }
          />
          <p className="text-xs text-muted-foreground">
            Recommended limit: 5-8 KPIs for focus.
          </p>
        </div>
        <div className="space-y-1.5">
          <Label className="text-xs text-muted-foreground">
            Evidence File Size Limit (MB)
          </Label>
          <Input
            placeholder="Enter Your Name"
            value={settings.evidenceFileSize}
            onChange={(e) =>
              setSettings({
                ...settings,
                evidenceFileSize: e.target.value,
              })
            }
          />
          <p className="text-xs text-muted-foreground">
            Maximum size per supporting document.
          </p>
        </div>
        <div className="space-y-1.5">
          <Label className="text-xs text-muted-foreground">
            Period Frequency
          </Label>
          <Input
            placeholder="Enter Your Name"
            value={settings.periodFrequency}
            onChange={(e) =>
              setSettings({
                ...settings,
                periodFrequency: e.target.value,
              })
            }
          />
          <p className="text-xs text-muted-foreground">
            Determines reporting cycles.
          </p>
        </div>
      </div>
    </div>
  );
}

export default KpiSystemConfiguration;
