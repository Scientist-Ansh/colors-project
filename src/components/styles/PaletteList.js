export const styles = {
    root: {
        background: "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
        backgroundSize: "400% 400%",
        animation: "$gradient 15s ease infinite",
        display: 'flex',
        height: '100vh',
        overflow:'scroll',
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    "@keyframes gradient": {
        "0%": {
            backgroundPosition: "0% 50%",
        },
        "50%": {
            backgroundPosition: "100% 50%",
        },
        "100%": {
            backgroundPosition: "0% 50%"
        }
    },

    container: {
        width: '60%',
        display: 'flex',
        flexFlow: 'column wrap',
        alignItems: 'flex-start'
    },
    nav: {
        color: 'white',
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems:'center',
        "& a":{
            color:'white'
        }
    },
    palettes: {
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(3,30%)',
        gridGap: '5%'
    }
}