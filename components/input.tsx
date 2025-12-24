interface InputProps {
  label: string;
  name: string;
  type?: "text" | "email";
  value?: string;
  onChange: React.Dispatch<React.SetStateAction<string>>
}

const Input = ({ label, name, type = "text", value, onChange }: InputProps) => {
  return (
    <div className="input-group">
      <label htmlFor={name}>
        {label} <span className='red'>*</span>
      </label>

      <input
        id={name}
        name={name}
        type={type}
        required
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default Input;
