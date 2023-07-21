import Link from "next/link";

function NavBar() {
  return (
    <div
      className=" flex flex-row items-center justify-between 
          tablet:w-full tablet:max-w-[500px] tablet:m-auto
          mobile:w-full  max-w-[1100px] m-auto mobile:flex-col mobile:bottom-b
        "
    >
      <Link href={`/`} scroll={true}>
        <a
          className=" cursor-pointer mobile:text-[16px] tablet:text-[14px] font-poppins
       hover:text-blue-700 mx-3 tablet:px-1 my-1 font-bold text-xl  hover:border-b-blue-700 hover:border-b mobile:py-3"
        >
          Ansh&nbsp;Rathod
        </a>
      </Link>

      <div className="py-4 mobile:border-y ">
        <ul className="flex flex-row justify-center px-14 tablet:px-8 mobile:px-4">
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
        className="uppercase cursor-pointer mobile:text-[14px] tablet:text-[14px] text-[16px]
       hover:text-blue-700 mx-3 tablet:px-1 my-1 text-gray-500 hover:border-b-blue-700 hover:border-b"
      >
        {props.name}
      </li>
    </Link>
  );
};

export default NavBar;
