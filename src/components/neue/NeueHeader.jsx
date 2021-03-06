export default function NeueHeader() {
  const listClass = "mr-20 last-child:mr-0"
  return (
    <div className="flex justify-between px-10 py-4 text-24 fixed top-0 left-0 w-full z-50">
      <h1>Neue</h1>
      <ul className="flex justify-end">
        <li className={listClass}>Work</li>
        <li className={listClass}>About</li>
        <li className={listClass}>Say hi</li>
      </ul>
    </div>
  )
}
