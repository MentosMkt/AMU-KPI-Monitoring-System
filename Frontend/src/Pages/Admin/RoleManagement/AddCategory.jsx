import { useState } from "react";
import { Input } from "../../../Components/UI/Input";
import Button from "../../../Components/UI/Button";

function AddCategory({ setActiveTab }) {
  const [categoryForm, setCategoryForm] = useState({
    category: "",
    description: "",
  });

  const handleCategorySave = () => {
    console.log("Save category:", categoryForm);
    setCategoryForm({ category: "", description: "" });
    setActiveTab("list");
  };

  return (
    <div className="rounded-2xl border border-border bg-muted/50 p-8 max-w-md space-y-5">
      <h2 className="text-lg font-semibold">Add Role Category</h2>

      <Input
        placeholder="Category"
        value={categoryForm.category}
        onChange={(e) =>
          setCategoryForm({
            ...categoryForm,
            category: e.target.value,
          })
        }
      />

      <Input
        placeholder="Enter Description"
        value={categoryForm.description}
        onChange={(e) =>
          setCategoryForm({
            ...categoryForm,
            description: e.target.value,
          })
        }
      />

      <div className="flex gap-3 pt-2">
        <Button onClick={handleCategorySave}>Save</Button>
        <Button variant="outline" onClick={() => setActiveTab("list")}>
          Cancel
        </Button>
      </div>
    </div>
  );
}

export default AddCategory;
