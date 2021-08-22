import { connect } from 'react-redux';
import { Container, Typography, makeStyles } from '@material-ui/core';
import Categories from '../categories/Categories';
import Products from '../products/Products'

const useStyles = makeStyles((theme) => ({
    heroContent: {
        padding: theme.spacing(5, 0, 3),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
}));

const Store = (props) => {
    const classes = useStyles();

    return (
        <main>
            <div className={classes.heroContent}>
                <Container maxWidth="sm" align="center">
                    <Categories />
                    <br />
                    <br />
                    <Typography
                        component="h3"
                        variant="h4"
                        align="center"
                        color="textPrimary"
                        mt="3"
                    >

                    </Typography>
                    <br />
                    <Typography
                        component="p"
                        variant="h5"
                        align="center"
                        color="textSecondary"
                        gutterBottom
                    >

                    </Typography>
                </Container>
            </div>
            <Products className="main" />
        </main>
    );
};

const mapStateToProps = (state) => ({
    activeList: state.categories,
});

export default connect(mapStateToProps)(Store);