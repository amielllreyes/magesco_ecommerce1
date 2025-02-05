"use client";

export default function Home() {
  return (
    <main className="flex flex-col">
    
      <section
        className="flex justify-center items-center min-h-screen p-12 md:p-6 sm:p-4 font-bold"
        style={{
          backgroundImage: "url('img/MagescoGardenandPoolServices.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center bottom",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "100%"
        }}
      ></section>

     
      <section className="flex flex-col justify-center items-center min-h-screen p-12 md:p-6 sm:p-4 bg-lightblue bg-[url('/wave.svg')] bg-no-repeat bg-bottom bg-cover">
        <h1 className="text-5xl font-semibold mt-[-30px]">Welcome to Magesco Garden and Pool Services</h1>
        <p className="mt-4 text-2xl text-center leading-relaxed">Transform your outdoor space with our premium pool and landscaping services. From stunning pools to lush garden designs, we bring your dream backyard to life. Explore our easy-to-use website and discover endless possibilities for your perfect outdoor oasis. Book consultations, browse projects, and get expert advice—all in one place. Your beautiful, customized landscape is just a click away!</p>
      </section>
      <section className="flex justify-center items-center min-h-screen p-12 md:p-6 sm:p-4 bg-lightblue bg-[url('/upsidedownwave.svg')] bg-no-repeat bg-bottom bg-cover">
        Feautured Works
      </section>
    </main>
  );
}
