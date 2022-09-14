import Link from "next/link";

const NavbarItem = (props: any) => {
  return (
    <Link href={`#${props.name.toLowerCase()}`} scroll={true}>
      <li
        className="uppercase cursor-pointer mobile:text-[14px] tablet:text-[14px]
       hover:text-blue-700 px-3 tablet:px-1 py-1 rounded "
      >
        {props.name}
      </li>
    </Link>
  );
};

export default NavbarItem;
