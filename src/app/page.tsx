export default function Home() {
  return (
    <main className="mx-auto w-1/2 p-4">
      <h1 className="text-xl font-bold p-4">PixAI - Your Creative AI Companion!</h1>
      <a className="py-4 px-8 rounded-md hover:shadow-md bg-neutral-50 text-slate-800 font-md" target="_blank" href={process.env.IG_OAUTH_URL}>Login with Instagram</a>
    </main>
  )
}