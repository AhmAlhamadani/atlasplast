import { cn } from "../../lib/utils"

interface SectionTitleProps {
  label?: string
  title: string
  description?: string
  align?: "left" | "center" | "right"
  className?: string
}

const SectionTitle = ({
  label,
  title,
  description,
  align = "left",
  className,
}: SectionTitleProps) => {
  const alignClass = {
    left: "text-left",
    center: "text-center mx-auto",
    right: "text-right ml-auto",
  }[align ?? "left"]

  return (
    <div className={cn("max-w-[740px]", alignClass, className)}>
      {label ? (
        <span className="section-label block mb-2">
          {label}
        </span>
      ) : null}
      <h2>{title}</h2>
      {description ? (
        <p className="mt-3">{description}</p>
      ) : null}
    </div>
  )
}

export default SectionTitle
