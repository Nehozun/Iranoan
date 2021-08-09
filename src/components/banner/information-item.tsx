import router from "next/router";

const InformationItem: React.FC<{ isLastItem?: boolean }> = (props) => {
  return (
    <div
      className={
        "cursor-pointer information-item flex flex-wrap items-center justify-between font-notoSans text-secondary text-base gap-x-6 gap-y-3 border-primary py-4 " +
        (props.isLastItem ? "border-none" : "border-b")
      }
      onClick={() => router.push('/news')}
    >
      <div className="first inline-flex items-center min-w-max gap-3">
        <span className="time">2021.06.01</span>
        <button className="news h-10 w-24 uppercase rounded-lg text-white bg-primary text-center py-2">
          news
        </button>
      </div>
      <div
        className="last flex-1 flex justify-between items-center gap-9"
        style={{ minWidth: "fit-content" }}
      >
        <div className="text flex-1">
          座席管理システム「せきとりくん」が北海道建設新聞にて紹介されました
        </div>
        <button
          className="border-none bg-transparent outline-none flex-shrink-0"
          type="button"
        >
          <img src="/images/vector.png" alt="vector" width="33" height="23" />
        </button>
      </div>
    </div>
  );
};

export default InformationItem;
