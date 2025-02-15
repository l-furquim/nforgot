import Link from "next/link"

interface GuideContainerProps {
  text: string,
  href: string,
  isSelected: boolean,
}

export const GuideContainer = ({ text, href, isSelected }: GuideContainerProps) => {
  return (
    <Link className={`${isSelected && "text-muted-foreground"} hover:bg-muted p-2 rounded-md `} href={href}>
      { text }
    </Link>
  )
}