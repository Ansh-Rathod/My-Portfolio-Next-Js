import Link from "next/link";

function NavBar() {
  return (
    <div
      className=" flex flex-row items-center justify-between 
          tablet:w-full tablet:max-w-[500px] tablet:m-auto
          mobile:w-full border-b max-w-[1100px] m-auto
        "
    >
      <Link href={`/`} scroll={true}>
        <a
          className=" cursor-pointer mobile:text-[14px] tablet:text-[14px] font-poppins
       hover:text-blue-700 mx-3 tablet:px-1 my-1 font-bold text-xl  hover:border-b-blue-700 hover:border-b"
        >
          Ansh Rathod
        </a>
      </Link>

      <div className="py-4 ">
        <ul className="flex flex-row justify-center px-14 tablet:px-8 mobile:px-4">
          <NavbarItem name="home" href="/" />
          <NavbarItem name="Memes" href="memes" />
          <NavbarItem name="Blogs" href="/blogs" />

          <NavbarItem name="connect" href="/#connect" />
        </ul>
      </div>
      <div className="invisible">This is space</div>
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
