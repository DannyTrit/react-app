import preloader from "../../../assets/img/preloader.svg"
import preloaderStyle from "./Preloader.module.css";
import appStyle from "../../../App.module.css";

let Preloader = () =>
{
	return <div className={`${appStyle.contentBlock} ${preloaderStyle.block}`}>
		<img src={preloader}/>
	</div>
}

export default Preloader;