import React from 'react';

export default function PlaygroundComponent ({ title, component, parameters }) {
    return (

        <button>button</button>
        {/* <div className={`list-item ${state}`}>
            <label className='checkbox'>
                <input type="checkbox" 
                defaultChecked={state === 'TASK_ARCHIVED'} 
                disabled={true} 
                name="checked" />

                <span 
                className='checkbox-custom' 
                onClick={()=> onArchiveTask(id)} 
                id={`archiveTask-${id}`} 
                aria-label={`archiveTask-${id}`}/>

                </label>
                
                <div className='title'>
                    <input type="text" value={title} readOnly={true} placeholder="Input title" />
                </div>

                <div className='actions' onClick= {event => event.stopPropagation()}>
                    {state !== 'TASK_ARCHIVED' && (
                        // eslint-disable-next-line jsx-a11y/anchor-is-valid
                        <a onClick={()=> onPinTask(id)}>
                            <span className={`icon-star`} id={`pinTask-${id}`} aria-label={`pinTask-${id}`} />
                        </a>
                    )}
                </div>
            </div> */}
    );
}

/* Task.propTypes = {
    task: PropTypes.shape ({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        state: PropTypes.string.isRequired,
    }),
    onArchiveTask: PropTypes.func,
    onPinTask: PropTypes.func,
}; */