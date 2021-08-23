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
        <footer className={classes.footer}>

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

        </footer>
    );
}

export default Footer;