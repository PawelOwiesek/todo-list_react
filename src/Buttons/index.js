import "./styles.css";

const Buttons = ({ tasks, hideDone, toggleHideDone }) => (

    <div className="section__buttons ">
        {tasks.length > 0 && (
            <>
                <button onClick={toggleHideDone} className="section__button">{hideDone ? " Show" : " Hide"}
                    Done Tasks
                </button>
                <button className="section__button"
                    disabled={tasks.every(({ done }) => done)}>
                    Mark All Tasks As Done
                </button>
            </>
        )}
    </div>
);

export default Buttons;