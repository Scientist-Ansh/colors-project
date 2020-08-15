import chroma from 'chroma-js';

export const styles = {
    colorBox: {
        width: "20%",
        height: props => props.showAllColors ? "25%" : "50%",
        margin: "0 auto",
        cursor: "pointer",
        display: "inline-block",
        position: "relative",
        marginBottom: "-3.8px",
        /* when hovered on ColorBox copy-button will be modified  */
        "&:hover $copyButton": {
            opacity: "1",
            transition: "0.5s"
        }
    },
    lightText: {
        color: props => chroma(props.background).luminance() <= 0.06 ? "white" : "black"
    },
    darkText: {
        color: props => chroma(props.background).luminance() >= 0.4 ? "black" : "white"
    },
    seeMore: {
        position: "absolute",
        right: "0px",
        bottom: "0px",
        textTransform: "uppercase",
        backgroundColor: "rgba(255,255,255,0.3)",
        color: "white",
        width: "65px",
        lineHeight: "30px",
        textAlign: "center",
    },

    copyButton: {
        color: props => chroma(props.background).luminance() >= 0.4 ? "black" : "white",
        height: "30px",
        width: "100px",
        position: "absolute",
        top: "50%",
        left: "50%",
        marginLeft: "-50px",
        marginTop: "-15px",
        textAlign: "center",
        outline: "none",
        background: "rgba(255,255,255,0.3)",
        border: "none",
        cursor: "pointer",
        /* opacity set to 0 to add transition on hover */
        opacity: "0",
    },
    colorName: {
        position: "absolute",
        padding: "10px",
        top: "0px",
        left: "0px",
        color: props => chroma(props.background).luminance() <= 0.05 ? "white" : "black",
        textTransform: "uppercase",
    },
    /* this is a overlay which is always on the screen vut not visible */
    copyOverlay: {
        opacity: "0",
        zIndex: "0",
        height: "100%",
        width: "100%",
        /* this will create the animation when its transforming */
        transition: "transform 0.7s ease-in-out",
    },
    /* here the overlay appears with the transformations  */
    showOverlay: {
        opacity: "1",
        zIndex: "10",
        transform: "scale(50)",
        position: "absolute",
        overflow: "hidden",
    },
    copyMessage: {
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "4rem",
        color: "white",
        transform: "scale(0.1)",
        /* hiding the elemet */
        opacity: 0,
    },
    showCopyMessage: {
        opacity: 1,
        transform: "scale(1)",
        zIndex: 25,
        transition: "all 0.5s ease-in-out",
        transitionDelay: "0.2s",
    }

}