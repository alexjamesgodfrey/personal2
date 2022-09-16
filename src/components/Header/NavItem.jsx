import clsx from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function NavItem({ href, children }) {
  let isActive = useRouter().pathname === href

  return (
    <li>
      <Link
        href={href}
        className={clsx(
          'relative block px-3 py-2 transition',
          isActive
            ? 'text-primary dark:text-primary-dark'
            : 'hover:text-primary dark:hover:text-primary-dark'
        )}
      >
        {children}
        {isActive && (
          <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-primary/0 via-primary/40 to-primary/0 dark:from-primary-dark/0 dark:via-primary-dark/40 dark:to-primary-dark/0" />
        )}
      </Link>
    </li>
  )
}
