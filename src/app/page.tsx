"use client";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col">
      <section className="bg-blue-500 p-12 md:p-6 sm:p-4 min-h-[90vh] flex justify-center items-center font-bold">
        <h1 className="text-4xl sm:text-2xl text-red-600">Home page</h1>
      </section>

      <section className="bg-white p-12 md:p-6 sm:p-4 min-h-[90vh] flex justify-center items-center">
        <h1 className="text-4xl sm:text-2xl">Images</h1>
      </section>
    </main>
  );
}
