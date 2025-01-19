export default function Home() {
  return (
    <main className="mx-auto w-1/2 p-4">
      <h1 className="text-xl font-bold p-4">PixAI - Your Creative AI Companion!</h1>
      <a className="py-2 px-4 bg-slate-100 text-slate-900" target="_blank" href="https://www.instagram.com/oauth/authorize?enable_fb_login=0&force_authentication=1&client_id=1290695332211263&redirect_uri=http://localhost:3000/api/auth/callback&response_type=code&scope=instagram_business_basic%2Cinstagram_business_manage_messages%2Cinstagram_business_manage_comments%2Cinstagram_business_content_publish">Login with Instagram</a>
    </main>
  )
}