interface FiltersSidebarProps {
  category: string
  type: string
  onCategoryChange: (value: string) => void
  onTypeChange: (value: string) => void
  onReset: () => void
}

const categoryOptions = ['Engineering', 'Design', 'Marketing', 'Data', 'Operations']
const typeOptions = ['Full-time', 'Contract', 'Part-time']

export function FiltersSidebar({
  category,
  type,
  onCategoryChange,
  onTypeChange,
  onReset,
}: FiltersSidebarProps) {
  return (
    <aside className="filters-card">
      <div className="section-heading">
        <p className="eyebrow">Refine Results</p>
        <h2>Filters</h2>
      </div>

      <label className="field">
        <span>Category</span>
        <select value={category} onChange={(event) => onCategoryChange(event.target.value)}>
          <option value="">All categories</option>
          {categoryOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>

      <label className="field">
        <span>Type</span>
        <select value={type} onChange={(event) => onTypeChange(event.target.value)}>
          <option value="">All types</option>
          {typeOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>

      <button className="ghost-button" type="button" onClick={onReset}>
        Clear filters
      </button>
    </aside>
  )
}
