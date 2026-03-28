import { Plus, Trash2 } from "lucide-react";
import Button from "../../../Components/UI/Button";
import { Input } from "../../../Components/UI/Input";
import { Label } from "../../../Components/UI/Label";

function GradingScale({ setTiers, tiers, settings, setSettings }) {
  const addTier = () => {
    setTiers([
      ...tiers,
      {
        id: Date.now().toString(),
        label: "New Tier",
        color: "#9ca3af",
        min: 0,
        max: 100,
      },
    ]);
  };

  const removeTier = (id) => {
    setTiers(tiers.filter((t) => t.id !== id));
  };

  const updateTier = (id, field, value) => {
    setTiers(tiers.map((t) => (t.id === id ? { ...t, [field]: value } : t)));
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
      <div className="lg:col-span-3 bg-card rounded-xl border border-border p-6 space-y-4">
        <div>
          <h2 className="text-lg font-semibold text-foreground">
            Performance Grading Scale
          </h2>
          <p className="text-sm text-muted-foreground">
            Map numeric scores to qualitative labels.
          </p>
        </div>
        <div className="space-y-3">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className="flex items-center gap-3 bg-muted/30 rounded-lg px-4 py-3"
            >
              <div
                className="w-5 h-5 rounded-full shrink-0"
                style={{ backgroundColor: tier.color }}
              />
              <Input
                className="max-w-17.5 h-9"
                value={tier.label}
                onChange={(e) => updateTier(tier.id, "label", e.target.value)}
              />
              <Input
                type="number"
                className="max-w-17.5 h-9 text-center"
                value={tier.min}
                onChange={(e) => updateTier(tier.id, "min", +e.target.value)}
              />
              <span className="text-muted-foreground">—</span>
              <Input
                type="number"
                className="max-w-17.5 h-9 text-center"
                value={tier.max}
                onChange={(e) => updateTier(tier.id, "max", +e.target.value)}
              />
              <Button
                variant="ghost"
                size="icon"
                className="ml-auto shrink-0"
                onClick={() => removeTier(tier.id)}
              >
                <Trash2 className="w-4 h-4 text-muted-foreground" />
              </Button>
            </div>
          ))}
        </div>
        <Button
          variant="ghost"
          className="w-full border border-dashed border-border text-muted-foreground"
          onClick={addTier}
        >
          <Plus className="w-4 h-4 mr-2" /> Add Scale Tier
        </Button>
      </div>

      <div className="lg:col-span-2 bg-card rounded-xl border border-border p-6 space-y-4">
        <div>
          <h2 className="text-lg font-semibold text-foreground">
            Deadlines & Windows
          </h2>
          <p className="text-sm text-muted-foreground">
            Define when the evaluation portal is open for data entry.
          </p>
        </div>
        <div className="space-y-1.5">
          <Label className="text-xs text-muted-foreground">
            KPI Submission Deadline
          </Label>
          <Input
            type="text"
            value={settings.kpiDeadline}
            onChange={(e) =>
              setSettings({ ...settings, kpiDeadline: e.target.value })
            }
          />
        </div>
      </div>
    </div>
  );
}

export default GradingScale;
