import Head from "next/head";
import Image from "next/image";
import MainLayout from "../components/MainLayout";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <MainLayout>
      <Head>
        <title>Lor-Axe</title>
        <meta name="description" content="Who will plant the most trees?" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen">
        <Hero />
      </div>
    </MainLayout>
  );
}
