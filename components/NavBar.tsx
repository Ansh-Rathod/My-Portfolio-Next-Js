import Link from "next/link";

function NavBar() {
  return (
    <div
      className=" flex flex-row items-center justify-between 
            
          
        "
    >
      <Link href={`/`} scroll={true}>
        <a
          className=" cursor-pointer 
       hover:text-blue-700 mx-3  my-1 font-bold text-xl  hover:border-b-blue-700 hover:border-b 
        >
          Ansh&nbsp;Rathod
        </a>
      </Link>

      <div className="py-4 
        <ul className="flex flex-row justify-center px-14  ">
          <NavbarItem name="home" href="/" />
          <NavbarItem name="Memes" href="/memes" />
          <NavbarItem name="connect" href="#connect" />
        </ul>
      </div>
    </div>
  );
}

const NavbarItem = (props: any) => {
  return (
    <Link href={`${props.href}`} scroll={true}>
      <li
        className="lowercase cursor-pointer 
       hover:text-blue-700 mx-3  my-1 text-gray-500 hover:border-b-blue-700 hover:border-b"
      >
        {props.name}
      </li>
    </Link>
  );
};

export default NavBar;
