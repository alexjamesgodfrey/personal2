import { Button } from '@/components/Button'
import MailIcon from '@/components/Icons/EmailIcon'

export default function Newsletter() {
  return (
    <form
      className="rounded-2xl border border-zinc-100  p-6 dark:border-zinc-700/40"
      action="https://app.us10.list-manage.com/subscribe/post"
      target="_blank"
      method="POST"
    >
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <MailIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Stay up to date</span>
      </h2>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        Get notified when I publish something new, and unsubscribe at any time.
      </p>
      <div className="mt-6 flex">
        <input type="hidden" name="u" value="1615cd2f3e299b7a2151bcc37" />
        <input type="hidden" name="id" value="b3b99f335e" />
        <input
          type="email"
          autoCapitalize="off"
          autoCorrect="off"
          name="MERGE0"
          id="MERGE0"
          placeholder="Email Address"
          className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 transition-all duration-300 placeholder:text-zinc-400 focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/20 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-primary-dark dark:focus:ring-primary-dark/20 sm:text-sm"
        />
        <Button type="submit" className="ml-4 flex-none">
          Join
        </Button>
      </div>
    </form>
  )
}
