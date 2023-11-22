import clsx from "clsx";

export const TextField = ({
    label,
    value,
    handleChange,
    required,
    placeholder,
    className,
}) => (
    <div className="text-black w-full flex flex-col gap-2">
        <label className="block text-sm lg:text-base">
            {label}
            {required && <span className="text-red-500">&nbsp;*</span>}
        </label>
        <input
            className={clsx(
                className,
                "w-full p-2 bg-white text-black text-sm lg:text-base rounded-md placeholder:pl-2 focus:outline-none border",
            )}
            onChange={(e) => handleChange(e.target.value)}
            value={value}
            required={required}
            placeholder={placeholder}
        />
    </div>
);
