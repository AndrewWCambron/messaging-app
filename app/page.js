import Head from 'next/head';
import dynamic from 'next/dynamic';

const Chat = dynamic(() => import('../components/Chat'), {
  ssr: false,
})

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Realtime Chat App with Ably, NextJS and Vercel</title>
        <link rel="icon" href="https://static.ably.dev/motif-red.svg?nextjs-vercel" type="image/svg+xml" />
      </Head>
      <main>
        <h1 className="title">Start The Conversation</h1>
        <Chat />
      </main>
      
    </div>
  )
}