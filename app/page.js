import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="text-4xl text-orange-600 font-bold text-center mt-5 py-5">Welcome to QWIIKORDER</div>
      <div>
          <p className="text-2xl font-bold text-center py-8">The Tailoring Struggle Ends Here</p>
          <p className="text-center px-3">No more late deliveries, wrong sizes, or excuses. QwiikOrder connects you with professional tailors who deliver beautiful outfits, on time, every time.</p>
          <div className="flex justify-center py-10">
          <p className="w-[200px] h-[40px] bg-orange-600 rounded-md text-white font-bold flex justify-center items-center">Place Your Order</p>
      </div>
      </div>
      <div className="grid grid-cols-1 px-10 py-10 md:grid-cols-2 md:px-15 py-5 lg:grid-cols-2 lg:px-30">
        <div>
          <Image
          src="/sad.jpg"
          alt="sad"
          width={300}
          height={300} className="w-[300px] h-[300px] rounded-full my-3"
          />
        </div>
        <div>
           <Image
           src="/happy0.jpg"
           alt="happy"
           width={300}
           height={300} className="w-[300px] h-[300px] rounded-full my-3"
           />
        </div>
      </div>  
      <p className="text-2xl font-bold py-10 flex justify-center md:flex md:justify-center">Your Perfect Fit In 4 Simple Steps</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      <div className="flex flex-col justify-center items-center mt-10">
        <Image
        src="/icons8-scissors-99.png"
        alt="custom"
        width={50}
        height={50}/>
       <p className="pt-2">Custom Designs</p>
      </div>
      <div className="flex flex-col justify-center items-center mt-10">
        <Image
        src="/icons8-suit-50.png"
        alt="happy"
        width={50}
        height={50}/>
       <p className="pt-2">Perfect Fit Guarantee</p>
      </div>
      <div className="flex flex-col justify-center items-center mt-10">
        <Image
        src="/icons8-time-50.png"
        alt="happy"
        width={50}
        height={50}/>
       <p className="pt-2">On Time Delivery</p>
      </div>
      <div className="flex flex-col justify-center items-center mt-10">
        <Image
        src="/icons8-thread-64.png"
        alt="happy"
        width={50}
        height={50}/>
       <p className="pt-2">Quality Fabrics</p>
      </div>
      </div>
      <p className="text-2xl font-bold py-10 flex justify-center md:flex md:justify-center">See What We Have Created</p>
      <div className="grid grid-cols-1 px-16 md:grid-cols-2 lg:grid-cols-4">
        <div className="my-3">
          <Image
          src="/d1.jpg"
          alt="stressed"
          width={300}
          height={250}/>
        </div>
         <div className="my-3">
          <Image
          src="/d2.jpg"
          alt="stressed"
          width={300}
          height={250}/>
        </div>
         <div className="my-3">
          <Image
          src="/d3.jpeg"
          alt="stressed"
          width={300}
          height={250}/>
        </div>
         <div className="my-3">
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
