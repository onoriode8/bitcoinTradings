
const backdrop = ({ back }) => {
    return (
        <>
            {back ? <div onClick={back} style={{
                backgroundColor: "rgba(0, 0, 0, 0.8)",
                width: "100%",
                height: "100vh",
                position: "fixed",
                top: "0",
                zIndex: "110"
            }}>
            </div> : null }
        </>
    );
};

export default backdrop;