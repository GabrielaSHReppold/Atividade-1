interface ButtonDeFaultProps {
    title: string
}


function ButtonDefault(props: ButtonDeFaultProps) {

    return <button>{ props.title }</button>
}

export default ButtonDefault;