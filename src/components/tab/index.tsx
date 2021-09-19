const PageTab: React.FC<{
  imageUrl?: string;
  title: string;
  subTitle: string;
  content: any;
  isBigImage?: boolean;
  link?: string;
  isNew?: boolean;
}> = (props) => {
  const onClickImage = () => {
    window.open(props.link, "_blank");
  };
  return (
    <div className="page-tab flex items-center justify-between font-notoSans gap-8 flex-wrap-reverse">
      <div
        className={
          "flex flex-col text-container " +
          (props.isBigImage ? "big-img-container" : "")
        }
      >
        {props.isNew ? (
          <img
            src="images/new-tag.png"
            className="w-13 md:w-20 hidden md:block"
          ></img>
        ) : null}
        <h2 className="tab-title font-bold text-2xl md:text-5xl text-third hidden md:block">
          {props.link ? (
            <a href={props.link} target="_blank">
              {props.title}
            </a>
          ) : (
            props.title
          )}
        </h2>
        <h3
          className={
            "tab-subtitle text-black mt-3 mb-5 " +
            (props.isBigImage ? "text-2xl" : "text-23px")
          }
        >
          {props.subTitle}
        </h3>
        <div
          className={
            "tab-content text-secondary " +
            (props.isBigImage ? "text-base md:text-lg" : "text-sm md:text-base")
          }
        >
          {props.content}
        </div>
      </div>
      <img
        src={props.imageUrl}
        onClick={onClickImage}
        alt="tab"
        className={
          "tab-image cursor-pointer object-contain " +
          (props.isBigImage ? " big-img" : "")
        }
      />
      <h2 className="tab-title font-bold text-2xl md:text-5xl text-third block md:hidden w-full">
        {props.isNew ? (
          <img
            src="images/new-tag.png"
            className="w-13 md:w-20 block md:hidden"
          ></img>
        ) : null}
        {props.link ? (
          <a href={props.link} target="_blank">
            {props.title}
          </a>
        ) : (
          props.title
        )}
      </h2>
    </div>
  );
};

export default PageTab;
