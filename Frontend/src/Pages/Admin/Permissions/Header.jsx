import { Plus, Shield } from 'lucide-react';
import Button from '../../../Components/UI/Button';

function Header() {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-2xl font-bold flex items-center gap-2">
          <Shield className="w-7 h-7 text-primary" />
          Permission Management
        </h1>
        <p className="text-sm text-muted-foreground mt-1">Control access rights across modules</p>
      </div>

      <Button className="bg-primary hover:bg-primary/90 flex items-center gap-2">
        <Plus className="w-4 h-4" />
        Save Changes
      </Button>
    </div>
  );
}

export default Header;
