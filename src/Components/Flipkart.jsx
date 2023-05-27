import abc from './flipkart.module.css'
import pic from './fli.webp'
const Flipkart=()=>{
    return(
          <section id={abc.nav}>
            <article>
                <div className={abc.Logo}>
                <img src={pic} height="30px" width="60%" />
                </div>
                
                
                <div className={abc.search}>
               
                <input type="text" placeholder="search for products,brands and more"   />
                <i class="fa-solid fa-magnifying-glass"></i>
                </div>
                
                <div className={abc.Menu} >
                    <ul>
                <li><a href="">NARESH</a></li>
                        <li><a href="">BECOME SELLER</a> </li>
                        <li><a href="">MORE</a></li>
                        
                        
                        <li><span><i class="fa-solid fa-cart-shopping"></i></span>
                          <a href="">CART</a> </li>
                        </ul>
                        </div>
                        
                

            </article>
        </section>
    )
}
export default Flipkart