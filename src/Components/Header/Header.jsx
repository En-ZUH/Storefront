/* eslint-disable no-unused-vars */
import { AppBar, Typography, Toolbar, Link, Grid, Box, } from '@material-ui/core/';
import './Header.scss';
import Cart from '../Cart/Cart';

function Header(props) {
    return (
        <AppBar position="relative"  >
            <Toolbar  >
                <Grid
                    container
                    direction="row"
                    justify="space-between"
                    alignItems="center"

                >
                    <Typography variant="h5" color="" noWrap className='headerStyle'  >
                        <Link color="inherit" href="/">
                            One-stop shop
                        </Link>
                    </Typography>

                    <Cart />
                </Grid>
            </Toolbar>
        </AppBar >

    );
}

export default Header;