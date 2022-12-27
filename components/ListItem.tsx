import { motion } from "framer-motion";

const ListItem = (props: any) => {
  const { name, i } = props;
  return (
    <div className="my-1 flex flex-row justify-between items-center w-[130px] ">
      <p className="capitalize text-[15px] font-apple h-[24px]">{name}</p>
      <div className="text-blue-500 h-[24px] flex items-center">
        {/* {star && <i className="fa-solid fa-star text-[10px] leading-0" />} */}
      </div>
    </div>
  );
};

export default ListItem;
