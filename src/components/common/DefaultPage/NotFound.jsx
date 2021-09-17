import appStyle from "../../../App.module.css";
import inThePipeline from "../../../assets/img/in_the_pipeline.png";
import notFoundStyle from "./NotFound.module.css";

const NotFound = () =>
{
	return (
		<div className={`${appStyle.contentBlock} ${notFoundStyle.pageContent}`}>
			<div>
				<img src={inThePipeline}/>
			</div>
			<div>
				<span className={notFoundStyle.defaultText}>
					Current page coming soon.
				</span>
			</div>
		</div>
	)
}
export default NotFound;