"use client";

export default function Home() {
  return (
    <main className="flex flex-col">
    
      <section
        className="flex justify-center items-center min-h-[90vh] p-12 md:p-6 sm:p-4 font-bold bg-blue-500"
        style={{
          backgroundImage: "url('img/MagescoGardenandPoolServices.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></section>

     
      <section className="flex justify-center items-center min-h-[90vh] p-12 md:p-6 sm:p-4 bg-lightblue bg-[url('/wave.svg')] bg-no-repeat bg-bottom bg-cover">
      Welcome to Magesco Garden and Pool Services
      </section>
      <section className="flex justify-center items-center min-h-[90vh] p-12 md:p-6 sm:p-4 bg-lightblue bg-[url('/upsidedownwave.svg')] bg-no-repeat bg-bottom bg-cover">
        Feautured Works
      </section>
    </main>
  );
}
