import { cn } from "../../lib/utils"

interface SectionTitleProps {
  label?: string
  title: string
  description?: string | React.ReactNode
  align?: "left" | "center" | "right"
  className?: string
  isArabic?: boolean
}

const SectionTitle = ({
  label,
  title,
  description,
  align = "left",
  className,
  isArabic = false,
}: SectionTitleProps) => {
  const alignClass = {
    left: "text-left",
    center: "text-center mx-auto",
    right: "text-right ml-auto",
  }[align ?? "left"]

  return (
    <div className={cn("max-w-[740px]", alignClass, className)}>
      {label && <span className={`section-label block mb-2 ${isArabic ? 'font-arabic' : ''}`}>{label}</span>}
      <h2 className={isArabic ? 'font-arabic' : ''}>{title}</h2>
      {description && <div className={`mt-3 ${isArabic ? 'font-arabic' : ''}`}>{description}</div>}
    </div>
  )
}

export default SectionTitle
