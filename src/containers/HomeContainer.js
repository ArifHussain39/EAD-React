import { connect } from 'react-redux';
import { addToCart } from '../services/Actions/Action';
import Home from '../components/Home';

const mapDispatchToProps = (dispatch) => ({
    addToCartHandler: (product) => dispatch(addToCart(product)),
});

const mapStateToProps = (state) => ({
   
});

export default Home;