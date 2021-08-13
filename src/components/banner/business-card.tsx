const BusinessCard: React.FC<{title: string, content: any}> = (props) => {
    return <div className="business-card font-notoSans">
        <div className="title text-xl font-medium">{props.title}</div>
        <hr className="hr border border-purple my-4 md:my-6 2xl:my-9" />
        <div className="business-content text-base md:text-lg text-secondary break-words">
           {props.content}
        </div>
    </div>
}

export default BusinessCard;