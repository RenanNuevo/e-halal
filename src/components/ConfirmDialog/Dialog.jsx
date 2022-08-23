import React from 'react';

function IconButton(props) {
    const {
        children,
        onClick = (event) => {},
        className = '',
    } = props;

    return (
        <button
            onClick={onClick}
            className={`focus:outline-none focus:border-none hover:bg-gray-400 hover:bg-opacity-25 p-2 rounded-full inline-flex items-center ${className}`}
        >
            {children}
        </button>
    );
}

function ExitIcon() {
    return (
        <svg
            className="h-6 w-6 fill-current text-white hover:text-grey-darkest"
            role="button"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
        >
            <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
        </svg>
    );
}

export default function Dialog(props) {
    const { open, onClose } = props;
    if (!open) {
        return <></>;
    }

    return (
        <div className="modal fade fixed inset-0 z-50 overflow-auto bg-smoke-light flex">
            <div className="relative bg-white w-full max-w-md m-auto flex-col flex">
                <div className=''>{props.children}</div>
                <span className="absolute -top-5 -right-5 p-4">     
                <IconButton onClick={() => onClose()}>
                    <ExitIcon />
                </IconButton>
                </span>
            </div>
        </div>
    );
}
