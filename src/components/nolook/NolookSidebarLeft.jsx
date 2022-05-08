export default function NolookSidebarLeft() {
  const menuLists = [
    {
      name: "SERVICE",
      url: "/",
    },
    {
      name: "SERVICE",
      url: "/",
    },
    {
      name: "SERVICE",
      url: "/",
    },
    {
      name: "SERVICE",
      url: "/",
    },
    {
      name: "SERVICE",
      url: "/",
    },
  ]

  const socialLists = [
    {
      name: "Instagram",
      url: "/",
    },
    {
      name: "Instagram",
      url: "/",
    },
    {
      name: "Instagram",
      url: "/",
    },
  ]

  return (
    <div className="fixed h-screen z-10">
      <div className="absolute top-0 left-10">
        <h1 className="mb-12 text-28 whitespace-nowrap font-semibold">Nolook inc.</h1>
        <ul className="">
          {menuLists.map(({ name, url }, index) => (
            <li className="mb-2" key={`${url}-${index}`}>
              <a href={url} className="uppercase font-medium">
                {name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <ul className="absolute bottom-14 left-10 -translate-y-[100%]">
        {socialLists.map(({ name, url }, index) => (
          <li className="mb-2" key={`${url}-${index}`}>
            <a href={url} className="font-medium">
              {name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
