import Link from "next/link"

interface GuideContainerProps {
  text: string,
  href: string,
  isSelected: boolean,
}

export const GuideContainer = ({ text, href, isSelected }: GuideContainerProps) => {
  return (
    <Link className={`${isSelected && "font-bold"}`} href={href}>
      { text }
    </Link>
  )
}