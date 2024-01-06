import Link from "next/link";

function AboutPage() {
  return (
    <section className="flex h-[calc(100vh-7rem)] justify-center items-center">
      <div className="text-center flex flex-col gap-5">
        <h1 className="text-5xl">About</h1>
        <Link
          href="/"
          className="bg-slate-500 hover:bg-slate-800 text-2xl rounded-md px-4 py-2"
        >
          Volver al inicio
        </Link>
      </div>
    </section>
  );
}

export default AboutPage;
