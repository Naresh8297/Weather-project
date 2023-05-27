import style from "./zee5.module.css"
import image from "./ze5.webp"
const Zee5=()=>{
    return(
<section id={style.nav}>
    <article>
<div className={style.logo}>
<img src={image} width="90%" height="50px" />
</div>
<div className={style.menu}>
<ul>
    <li><a href="">Home</a></li>
    <li><a href="">TV Shows</a></li>
    <li><a href="">Movies</a></li>
    <li><a href=""> <i class="fa-solid fa-bars"></i></a></li>
    
    </ul>
</div>
<div className={style.search}>
<input type="search" className={style.search}  placeholder="Search for Movies,Shows,Channels etc." />
<i class="fa-solid fa-magnifying-glass"></i>
 </div>
 
<div className={style.logbypaln}>
    <h1>A</h1>
    <ol>
    <button>LOGIN</button>
    </ol>
 <div>
 <h1>
    <button>BUY PLAN</button>
 </h1>
 </div> 
 <div className={style.bar}>
  <h4><i class="fa-solid fa-bars"></i></h4>
 </div>
 
</div>

    </article>
</section>
    )
}
export default Zee5