import { cn } from "../../lib/utils"

interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
  type?: "button" | "submit" | "reset"
  className?: string
  disabled?: boolean
  hoverBgColorClass?: string
}

const Button = ({
  children,
  onClick,
  type = "button",
  className,
  disabled = false,
  hoverBgColorClass = "bg-secondaryColor",
}: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-disabled={disabled}
      className={cn(
        "relative overflow-hidden group bg-primaryBlue text-white px-[30px] py-3 rounded-full md:text-[18px] text-[16px] font-primary font-medium leading-8 capitalize cursor-pointer transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed",
        className
      )}
    >
      <span
        className={cn(
          "absolute inset-0 rounded-[30px] scale-y-0 origin-center transition-transform duration-300 ease-out group-hover:scale-y-100 z-0",
          hoverBgColorClass
        )}
      />
      <span className="relative z-10 group-hover:text-white">{children}</span>
    </button>
  )
}

export default Button
