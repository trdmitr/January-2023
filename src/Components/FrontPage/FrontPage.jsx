import classes from './FrontPage.module.css'
import { useNavigate } from 'react-router-dom'
import cl from '../UI/Pub.module.css'
import CaverButton from '../UI/Buttons/CaverButton'
import IconButtonHome from '../UI/Buttons/IconButtonHome'
import Img from '../Img'

const FrontPage = () => {
    const navigate = useNavigate();
  const imgUrl = "https://sun9-58.userapi.com/impg/YUvWNL-HQjJy4I_PfraS5GJdg9Sxg3-DFB7cpA/pGcRov2WE3U.jpg?size=610x933&quality=96&sign=815d8a4c90403925e1b2d5e42ecfe9a0&type=album"
  const imgAlt = "Каверы Подземки"

return (
  
    <div className={cl.tribute_app}>
      <div className={classes.content}>
        <IconButtonHome onClick={() => navigate("/")}>Главная</IconButtonHome>
        <CaverButton onClick={() => navigate("/cavers")}>Каверы</CaverButton>
        {/* <PlayButton  onClick={() => navigate("/playlist")}></PlayButton> */}
        {/* <div className={classes.front_header}>
                    <p>Letov-56</p>
                </div> */}
                <div className={classes.front_media}>
                  <Img imgUrl = {imgUrl} imgAlt={imgAlt}/>
                    {/* <img src={imUrl} width={80} alt="Каверы Подземки" /> */}
                </div>
                <div className={classes.front_body}>
                    <span>Трибьют, посвященный музыкантам, родившимся в январе </span>
                </div>
      </div>
    </div>
  )
}
  export default FrontPage