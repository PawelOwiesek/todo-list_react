import "./styles.css";

const Buttons=(props)=>(
     props.tasks.length > 0 &&
        <div className="section__buttons ">
             <button className="section__button">{props.hideDoneTask ? " Show" : " Hide"}
                Done Tasks
            </button>
            <button className="section__button"
            disabled={props.tasks.every(({ done })=>done)}>
                Mark All Tasks As Done
            </button>
        </div>
    );

export default Buttons;