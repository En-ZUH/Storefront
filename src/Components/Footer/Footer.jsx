import { Typography, makeStyles } from '@material-ui/core/';

const useStyles = makeStyles((theme) => ({
    footer: {
        color: 'white',
        backgroundColor: '#94D0CC',
        padding: theme.spacing(1.5),
    },
}));
function Footer() {
    const classes = useStyles();
    return (
        <Footer className={classes.footer}>
            <Typography variant="h6" color="inherit" align="center" gutterBottom>

            </Typography>
            <Typography
                variant="subtitle1"
                align="center"
                color="inherit"
                component="p"
            >
                &copy; Enas
                {' '}
                {new Date().getDate()}-{new Date().getMonth()}-{new Date().getFullYear()}

            </Typography>

        </Footer>
    );
}

export default Footer;