const LinkButton = ({title, to}) => {

    return (
        <a className="px-1" href={to}>{title}</a>
    )
}

export default LinkButton