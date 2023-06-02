function CustomHeader(props: { text: string }) {
    return(
        <h5 className='font-4 text-[14px] text-primary-header text-start'>
            { props.text }
        </h5>
    );
}

export default CustomHeader;