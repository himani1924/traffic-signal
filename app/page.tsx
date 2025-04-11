// import Signal from "@/components/Signal";


export default function Home() {
  const directions = ['North' , 'West' , 'South' , 'East' ];
  return (
    <div>


    <div className="flex flex-col items-center w-full justify-center gap-5 bg-gray-200 p-10">
      {
        directions.map((d)=>(
          <div key={d} className="flex w-[400px] flex-1 items-center justify-between gap-10 ">
            <label>{d} (in seconds)</label>
            <input type="number" name={d} className="border p-1 rounded align-center justify-center bg-white" />
          </div>
        ))
      }
      <button className="border px-10 py-2 bg-green-400">start</button>
    </div>
    
    </div>
  );
}
