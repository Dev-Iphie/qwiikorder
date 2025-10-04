import Image from "next/image";


export default function Home() {
  return (
    <main>
      <p className="text-4xl text-orange-600 font-bold text-center mt-5">Welcome to QWIIKORDER</p>
      <div className="flex justify-between px-40 py-15">
        <div className="w-[400px] h-[300px]">
          <p className="text-2xl font-bold text-center py-8">The Tailoring Struggle Ends Here</p>
          <p className="px-3 text-center">No more late deliveries, wrong sizes, or excuses. QwiikOrder connects you with professional tailors who deliver beautiful outfits, on time, every time.</p>
        <div className="flex justify-center py-10" >
          <p className="w-[200px] h-[40px] bg-orange-600 rounded-md text-white font-bold flex justify-center items-center">Place Your Order</p>
        </div>
        </div>
        <div>
          <Image
      src="/sad.jpg"
      alt="sad"
      width={300}
      height={250}/>
        </div>
        <div>
           <Image
      src="/happy0.jpg"
      alt="happy"
      width={300}
      height={250}/>
        </div>
      </div>
      <p className="text-2xl font-bold flex justify-center">Your Perfect Fit In 4 Simple Steps</p>
      <div className="flex justify-between py-7 px-25">
      <div className="flex flex-col justify-center items-center mt-10">
        <Image
      src="/icons8-scissors-99.png"
      alt="custom"
      width={50}
      height={50}/>
       <p class="pt-2">Custom Designs</p>
      </div>
      <div className="flex flex-col justify-center items-center mt-10">
        <Image
      src="/icons8-suit-50.png"
      alt="happy"
      width={50}
      height={50}/>
       <p class="pt-2">Perfect Fit Guarantee</p>
      </div>
      <div className="flex flex-col justify-center items-center mt-10">
        <Image
      src="/icons8-time-50.png"
      alt="happy"
      width={50}
      height={50}/>
       <p class="pt-2">On Time Delivery</p>
      </div>
      <div className="flex flex-col justify-center items-center mt-10">
        <Image
      src="/icons8-thread-64.png"
      alt="happy"
      width={50}
      height={50}/>
       <p class="pt-2">Quality Fabrics</p>
      </div>
      </div>
      <p className="text-2xl font-bold flex justify-center">See What We Have Created</p>
      <div className="flex justify-between py-7 px-25">
        <div>
          <Image
      src="/d1.jpg"
      alt="stressed"
      width={300}
      height={250}/>
        </div>
         <div>
          <Image
      src="/d2.jpg"
      alt="stressed"
      width={300}
      height={250}/>
        </div>
         <div>
          <Image
      src="/d3.jpeg"
      alt="stressed"
      width={300}
      height={250}/>
        </div>
         <div>
          <Image
      src="/d4jpg.jpg"
      alt="stressed"
      width={300}
      height={250}/>
        </div>
      </div>
      <div className="flex justify-center py-10" >
          <p className="w-[200px] h-[40px] bg-orange-600 rounded-md text-white font-bold flex justify-center items-center">Place Your Order</p>
        </div>
      
      
    </main>
    
  );
}
