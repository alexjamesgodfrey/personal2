export default function Page() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="mx-auto max-w-3xl rounded-lg bg-white p-8 shadow-lg">
        <h1 className="mb-6 text-3xl font-bold">Privacy Policy</h1>

        <section className="mb-8">
          <h2 className="mb-2 text-2xl font-semibold">
            Single Purpose Description
          </h2>
          <p className="text-gray-700">
            This extension ensures that every time you click the New Chat button
            on ChatGPT, it automatically opens with your chosen default model.
            It intercepts page loads and button clicks to append a{' '}
            <code>model</code> query parameter based on your saved preference.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-2 text-2xl font-semibold">
            Storage Use Justification
          </h2>
          <p className="mb-2 text-gray-700">
            The <code>storage.sync</code> permission is required to save and
            retrieve the user’s selected default model (e.g.,{' '}
            <code>gpt-4o</code>, <code>o4-mini</code>). Using Chrome’s sync
            storage allows:
          </p>
          <ul className="list-inside list-disc space-y-1 text-gray-700">
            <li>
              <strong>Persistence</strong>: Preferences persist across browser
              sessions.
            </li>
            <li>
              <strong>Sync</strong>: If the user is signed in with the same
              Google account, the choice propagates across devices.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="mb-2 text-2xl font-semibold">
            Scripting Justification
          </h2>
          <p className="mb-2 text-gray-700">
            The <code>scripting</code> permission enables the extension to
            programmatically:
          </p>
          <ol className="list-inside list-decimal space-y-1 text-gray-700">
            <li>
              <strong>Inject</strong> and run <code>content.js</code> on ChatGPT
              pages.
            </li>
            <li>
              <strong>Modify</strong> the New Chat button’s <code>href</code>{' '}
              attribute to include the default model.
            </li>
          </ol>
        </section>

        <section className="mb-8">
          <h2 className="mb-2 text-2xl font-semibold">
            Host Permission Justification
          </h2>
          <p className="mb-2 text-gray-700">
            The extension declares host permissions for{' '}
            <code>https://chatgpt.com/*</code> so it can:
          </p>
          <ul className="list-inside list-disc space-y-1 text-gray-700">
            <li>
              <strong>Detect</strong> when the user is on a ChatGPT page.
            </li>
            <li>
              <strong>Redirect</strong> or <strong>rewrite</strong> URLs on
              ChatGPT domains.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="mb-2 text-2xl font-semibold">
            Privacy Policy Details
          </h2>
          <div className="space-y-4 text-gray-700">
            <div>
              <strong>Data Collection:</strong> This extension does{' '}
              <strong>not</strong> collect or transmit any personal or usage
              data. The only data saved is the user’s chosen model name, stored
              locally and synced via Chrome’s <code>storage.sync</code>.
            </div>
            <div>
              <strong>Third-Party Services:</strong> No third-party analytics,
              advertising, or tracking services are used.
            </div>
            <div>
              <strong>Data Sharing:</strong> No data is shared with external
              parties.
            </div>
            <div>
              <strong>Security:</strong> All operations occur within the
              browser. No outbound network requests are made by the extension.
            </div>
            <div>
              <strong>Contact:</strong> For questions, please visit the project
              repository or contact the developer directly via the extension’s
              support link.
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
