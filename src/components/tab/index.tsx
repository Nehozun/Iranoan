const PageTab: React.FC<{
  imageUrl?: string;
  title: string;
  subTitle: string;
  content: any;
  isBigImage?: boolean;
}> = (props) => {
  return (
    <div className="page-tab flex items-center justify-between font-notoSans gap-8 flex-wrap-reverse">
      <div className={'flex flex-col text-container ' + (props.isBigImage ? 'big-img-container' : '')}>
        <h2 className="tab-title font-bold text-2xl md:text-5xl text-third hidden md:block">
          {props.title}
        </h2>
        <h3 className="tab-subtitle text-2xl text-black mt-3 mb-5">
          {props.subTitle}
        </h3>
        <div className="tab-content text-secondary text-base md:text-lg">{props.content}</div>
      </div>
      <img src={props.imageUrl} alt="tab" className={'tab-image' + (props.isBigImage ? ' big-img' : '')} />
      <h2 className="tab-title font-bold text-2xl md:text-5xl text-third block md:hidden">
        {props.title}
      </h2>
    </div>
  );
};

export default PageTab;
