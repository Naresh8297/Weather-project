import abc from './myntra.module.css'
import pic from './myntra.webp'
const Myntra=()=>{
    return(
          <section id={abc.nav}>
            <article>
                <div className={abc.Logo} >
                    <img src={pic} height="70" width="90%" />
                     </div>
                <div className={abc.Menu} >
                    <ol>
                        <li><a href="">MEN</a></li>
                        <li><a href="">WOMEN</a> </li>
                        <li><a href="">KIDS</a></li>
                        <li><a href="">HOME & LIVING</a> </li>
                        <li><a href="">BEAUTY</a> </li>
                        <li><a href="">STUDIO <sup>NEW</sup></a> </li>
                    </ol>
                </div >
                <div className={abc.search}>
                <div>
               
                <input type="text" placeholder="search for products,brands and more" />
                <i class="fa-solid fa-magnifying-glass"></i>
                </div>
                </div>
                <div className={abc.profile}>
                <i class="fa-solid fa-user"></i>
               
                <i class="fa-solid fa-heart"></i>
                <i class="fa-solid fa-bag-shopping"></i>
                </div>
            </article>

        </section>
        
        
       
 
    )
}
export default Myntra