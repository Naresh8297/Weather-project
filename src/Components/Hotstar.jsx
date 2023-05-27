import abc from './hotstar.module.css'
const Hotstar=()=>{
    return(
        <div>

          <section className={abc.nav}>
            
                 
                
            
                <div className={abc.items} >
                <div className={abc.menu} >
                    <a href="">
                        <img class="brand-logo" src="https://secure-media.hotstarext.com/web-assets/prod/images/brand-logos/disney-hotstar-logo-dark.svg"
                         alt="Disney+&nbsp;Hotstar" />
                    </a>
                    <ol>
                   
                        <li><a href="" className={abc.tv}>TV</a></li>
                        <li><a href="">Movies</a></li>
                        <li><a href="">Sports</a></li>
                        <li><a href="">Disney+</a></li>
                         <li ><a href="" className={abc.kids}>KIDS</a></li>
                    </ol>
                </div >
                <div className={abc.content}>
                <div className={abc.searchbar}>
                <input type="text" className={abc.search} placeholder="Search" />
                <i class="fa-solid fa-magnifying-glass" style={{color:"aliceblue",fontSize:"12px"}}></i>
                </div>
                <button>SUBSCRIBE</button>
                <h4>Login</h4>
                </div>
           
                
                </div>
          
        </section>
         </div>
        
       
 
    )
}
export default Hotstar