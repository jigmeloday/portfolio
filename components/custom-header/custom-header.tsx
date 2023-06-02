function CustomHeader(props: { text: string }) {
    return(
        <h5 className='font-3 text-[16px] text-primary-main text-center lg:text-start'>
            { props.text }
        </h5>
    );
}

export default CustomHeader;