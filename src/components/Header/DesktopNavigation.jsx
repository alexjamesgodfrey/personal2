import NavItem from '@/components/Header/NavItem'

export default function DesktopNavigation(props) {
  return (
    <nav {...props}>
      <ul className="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
        <NavItem href="/about">About</NavItem>
        {/* <NavItem href="/companies">Companies</NavItem> */}
        {/* <NavItem href="/education">Education</NavItem> */}
        <NavItem href="/projects">My Work</NavItem>
        <NavItem href="/writings">Writings</NavItem>
        {/* <NavItem href="/uses">Uses</NavItem> */}
      </ul>
    </nav>
  )
}
