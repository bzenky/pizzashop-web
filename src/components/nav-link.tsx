import { Link, LinkProps, useLocation } from 'react-router-dom'

export type NavLinksProps = LinkProps

export function NavLink(props: NavLinksProps) {
  const { pathname } = useLocation()

  return (
    <Link
      data-current={pathname === props.to}
      className="hover:text- flex items-center gap-1.5 text-sm font-medium text-muted-foreground data-[current=true]:text-foreground"
      {...props}
    />
  )
}
