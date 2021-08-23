import { connect } from 'react-redux';
import { Container, Typography, Grid, Card, CardMedia, CardContent, makeStyles, CardActions, Button } from '@material-ui/core/';
import { increment } from '../../store/actions';
import '../../App.css'

const useStyles = makeStyles((theme) => ({
    cardGrid: {
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        width: '18.5rem',
        display: 'flex',
        flexDirection: 'column',


    },
    cardMedia: {
        paddingTop: '120%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
}));

const Products = (props) => {
    const classes = useStyles();
    return (
        <Container className={classes.cardGrid} maxWidth="md">
            <Grid container spacing={4}>
                {props.products.products.map((product) => {
                    return (
                        <Grid item key={product.id} xs={12} sm={6} md={4} border-radius="25% 10%">
                            <Card className={classes.card}>
                                <CardMedia
                                    className={classes.cardMedia}
                                    image={product.url}
                                    title="Image title"
                                />
                                <CardContent className={classes.cardContent}>
                                    <Typography className='dataCardName' gutterBottom variant="h6" component="h2"><Typography>{product.name}</Typography>

                                    </Typography>
                                    <Typography className='dataCardPrice' gutterBottom>Price : ${product.price}</Typography>

                                    <Typography className='dataCardStock'>
                                        {product.inStock > 0 ?
                                            `In-Stock :  ${product.inStock}  items available` : `Sold Out`}
                                    </Typography>
                                </CardContent>

                                <CardActions>
                                    < Button className='choiceBtn' variant="contained"
                                        size="small"

                                        onClick={() => props.increment(product)}
                                        disabled={product.inStock > 0 ? false : true}
                                    >
                                        Add to cart
                                    </Button>
                                    <Button className='choiceBtn' variant="contained" size="small"  >
                                        View details
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    );
                })}
            </Grid>
        </Container >
    );
};

const mapStateToProps = (state) => ({ products: state.products });
const mapDispatchToProps = { increment };
export default connect(mapStateToProps, mapDispatchToProps)(Products);
