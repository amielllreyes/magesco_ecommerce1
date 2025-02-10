"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"


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

     
      <section className="flex flex-col justify-center items-center min-h-screen p-12 md:p-6 sm:p-4 bg-lightblue bg-[url('/layeredwaves.svg')] bg-no-repeat bg-bottom bg-cover">
        <h1 className="text-5xl font-semibold mt-[-30px] ">Welcome to Magesco Garden and Pool Services</h1>
        <p className="mt-4 text-2xl text-center leading-relaxed">Transform your outdoor space with our premium pool and landscaping services. From stunning pools to lush garden designs, we bring your dream backyard to life. Explore our easy-to-use website and discover endless possibilities for your perfect outdoor oasis. Book consultations, browse projects, and get expert advice—all in one place. Your beautiful, customized landscape is just a click away!</p>
      </section>
      <section className="min-h-screen p-12 md:p-6 sm:p-4 bg-lightblue bg-[url('/layeredwavestop.svg')] bg-no-repeat bg-bottom bg-cover">
        <h1 className="text-7xl 
        font-bold 
        bg-gradient-to-br
      from-blue-500 
      to-slate-400 
        text-transparent 
        bg-clip-text">Featured Works</h1>

        <div className="flex justify-center items-center">
          
    
        <Carousel className="justify-center w-full max-w-6xl mx-auto mt-[200px]">
  <CarouselContent className="-ml-2">
    {["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg", "img6.jpg"].map((image, index) => (
      <CarouselItem key={index} className="pl-2 md:basis-1/2 lg:basis-1/3">
        <div className="p-4">
          <Card>
            <CardContent className="flex aspect-[5/4] items-center justify-center p-6">
              <img src={image} alt={`Featured work ${index + 1}`} className="object-cover w-full h-full rounded-2xl" />
            </CardContent>
          </Card>
        </div>
      </CarouselItem>
    ))}
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>


    
  


        </div>
      </section>
    </main>
  );
}
