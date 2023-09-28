export const Input = ({ className, label, name, type, placeholder, value, setValue, alert }) => {
    return (
        <div className={className}>
            <label className="text two" htmlFor={name}>{label}</label>
            <input type={type} id={name} name={name} placeholder={placeholder} value={value} onChange={(e) => setValue(e.target.value)} />
            <p className="text one">{alert}</p>
        </div>
    )
}