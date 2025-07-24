interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "outlined" | "text";
}

export const Button = ({
  children,
  variant = "outlined",
  ...props
}: ButtonProps) => {
  if (variant === "outlined") {
    return (
      <div className="gradient-border-wrapper rounded-full w-max h-min p-2">
        <button
          {...props}
          className={`px-4 py-2 rounded-full transition-all duration-200 bg-black ${
            props.className || ""
          }`}
        >
          <span className="text-white">{children}</span>
        </button>
      </div>
    );
  }

  return (
    <button
      {...props}
      className={`px-4 py-2 rounded-lg transition-all duration-200  ${
        props.className || ""
      }`}
    >
      <span className="text-white">{children}</span>
    </button>
  );
};
