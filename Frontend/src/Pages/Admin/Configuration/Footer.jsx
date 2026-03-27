import { Save } from "lucide-react";
import Button from "../../../Components/UI/Button";

function Footer() {
  return (
    <div className="flex items-center justify-between border-t border-border pt-4 pb-6">
      <p className="text-xs text-muted-foreground">
        Last modified by admin: Mirreshan Markos on Oct 14, 2024
      </p>
      <div className="flex gap-3">
        <Button variant="outline">Reset to Defaults</Button>
        <Button className="gap-2">
          <Save className="w-4 h-4" /> Save Configuration
        </Button>
      </div>
    </div>
  );
}

export default Footer;
