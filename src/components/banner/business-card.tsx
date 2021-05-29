const BusinessCard: React.FC<{title: string, content: any}> = (props) => {
    return <div className="business-card font-notoSans">
        <div className="title text-2xl lg:text-3xl 2xl:text-4xl font-medium">{props.title}</div>
        <hr className="hr border border-purple my-4 md:my-6 2xl:my-9" />
        <div className="business-content text-base lg:text-2xl 2xl:text-3xl text-secondary break-words">
           {props.content}
        </div>
    </div>
}

export default BusinessCard;