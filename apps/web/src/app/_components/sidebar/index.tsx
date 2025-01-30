interface SideBarProps {
  alias: string,
  id: string,
  email: string,
}

export const SideBar: React.FC<SideBarProps> = ({ alias, id, email }) => {
  return (
    <h1>sideBar</h1>
  )
}