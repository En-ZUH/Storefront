import { connect } from 'react-redux';
import { Container, Typography, Grid, Card, CardMedia, CardContent, makeStyles, } from '@material-ui/core/';
import { increment } from '../../store/product-reducer';

const useStyles = makeStyles((theme) => ({
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '70%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
}));

const Status = (props) => {
    const classes = useStyles();
    return (
        <Container className={classes.cardGrid} maxWidth="md">
            <Grid container spacing={4}>
                {props.products.products.map((product) => {
                    return (
                        <Grid item key={product._id} xs={12} sm={6} md={4} border-radius="25% 10%">
                            <Card className={classes.card}>
                                <CardMedia
                                    className={classes.cardMedia}
                                    image={product.url}
                                    title="Image title"
                                />
                                <CardContent className={classes.cardContent}>
                                    <Typography gutterBottom variant="h6" component="h2">
                                        {product.name}
                                    </Typography>
                                    <Typography>Price: ${product.price}</Typography>
                                    <Typography>In-Stock:  {product.inStock} items</Typography>
                                </CardContent>

                            </Card>
                        </Grid>
                    );
                })}
            </Grid>
        </Container>
    );
};

const mapStateToProps = (state) => ({ products: state.products });
const mapDispatchToProps = { increment };
export default connect(mapStateToProps, mapDispatchToProps)(Status);
