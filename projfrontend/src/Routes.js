import React from 'react'
import {Route, Link, Switch,BrowserRouter as Router, BrowserRouter} from 'react-router-dom';
import AddCategory from './admin/AddCategory';
import AddProduct from './admin/AddProduct';
import ManageCategories from './admin/ManageCategories';
import ManageProducts from './admin/ManageProducts';
import UpdateCategory from './admin/UpdateCategory';
import UpdateProduct from './admin/UpdateProduct';
import AdminRoutes from './auth/helper/AdminRoutes';
import PrivateRoutes from './auth/helper/PrivateRoutes';
import Cart from './core/helper/Cart';
import Home from './core/Home';
import AdminDashBoard from './user/AdminDashBoard';
import Signin from './user/Signin';
import Signup from './user/Signup'
import UserDashBoard from './user/UserDashBoard';




const Routes = () => {
    return (
     <BrowserRouter>
        <Switch>
        <Route  path="/" exact component={Home}/>
        <Route  path="/signup" exact component={Signup}/>
        <Route  path="/signin" exact component={Signin}/>
        <Route path="/cart" exact component={Cart} />
        <PrivateRoutes path="/user/dashboard" exact component={UserDashBoard}  />
        <AdminRoutes path="/admin/dashboard" exact component={AdminDashBoard}  />
        <AdminRoutes path="/admin/create/category" exact component={AddCategory}  />
        <AdminRoutes path="/admin/categories" exact component={ManageCategories} />
        <AdminRoutes path="/admin/create/product" exact component={AddProduct} />
        <AdminRoutes path="/admin/create/product" exact component={AddProduct} />
        <AdminRoutes path="/admin/products" exact component={ManageProducts} />
        <AdminRoutes path="/admin/product/update/:productId" exact component={UpdateProduct} />
        <AdminRoutes path="/admin/category/update/:categoryId" exact component={UpdateCategory} />
       
        </Switch>
     </BrowserRouter>
    )
}

export default Routes
