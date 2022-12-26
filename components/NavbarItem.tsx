import Link from "next/link";

const NavbarItem = (props: any) => {
  return (
    <Link href={`#${props.name.toLowerCase()}`} scroll={true}>
      <li
        className="uppercase cursor-pointer mobile:text-[14px] tablet:text-[14px]
       hover:text-blue-700 mx-3 tablet:px-1 my-1  hover:border-b-blue-700 hover:border-b"
      >
        {props.name}
      </li>
    </Link>
  );
};

export default NavbarItem;
