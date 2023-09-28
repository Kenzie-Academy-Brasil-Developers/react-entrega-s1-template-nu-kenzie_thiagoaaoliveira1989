export const Select = ({ className, label, name, value, onChange, options }) => {
    return (
        <div className={className}>
            <label  className="text two"  htmlFor={name}>{label}</label>
            <select name={name} id={name} value={value} onChange={onChange}>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
};