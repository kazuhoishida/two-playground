export default function CollageHeader() {
  return (
    <div className="flex justify-between mt-6 z-50 relative w-[90%] mx-auto">
      <div className="relative">
        <h2 className="text-[10vw] font-black leading-none">1</h2>
        <p className="text-14 font-black tracking-[0.4em] rotate-90 absolute -right-[75%] top-[43%]">動かす</p>
      </div>
      <p className="text-20 font-bold leading-tight w-1/2 pt-4">
        Propose a lettering for a book.
        <br />
        You can <span className="text-[#f15a24]">drag letters & shapes</span> anywhere you want.
      </p>
    </div>
  )
}
