const ListItem = (props: any) => {
  const { name, i } = props;
  return (
    <div className="my-1 flex flex-row justify-between items-center w-[130px] ">
      <p className=" tracking-tighter lowercase h-[24px] text-[18px] text-slate-500 ">
        {name}
      </p>
      <div className="text-blue-500 h-[24px] flex items-center">
        {/* {star && <i className="fa-solid fa-star text-[10px] leading-0" />} */}
      </div>
    </div>
  );
};

export default ListItem;
