import React from 'react';
import Dialog from './Dialog';

function Button(props) {
    const { type = 'button', children, onClick, className = '' } = props;
    return (
        <button
            className={`bg-primary hover:bg-primary-light text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${className}`}
            type={type}
            onClick={onClick}
        >
            {children}
        </button>
    );
}

export default function ConfirmDialog(props) {
  const { open, onClose, title, children, onConfirm } = props;
  if (!open) {
    return <></>;
  }
  
  return (
    <Dialog open={open} onClose={onClose}>
        <h2 className="text-2xl bg-green-700 text-white p-4 text-center font-bold">{title}</h2>
        <div className='flex flex-col m-5'>
            <div className="p-5 text-center text-md">{children}</div>
            <div className="flex justify-center p-3 w-full">
                <div className="w-full m-1">
                    <Button
                        onClick={() => onClose()}
                        className="bg-green-700 hover:bg-green-900 flex-auto w-full"
                    >
                        Confirm
                    </Button>
                </div>
                <div className="w-full m-1">
                    <Button
                        className="bg-red-400 hover:bg-red-700 flex-auto w-full"
                        onClick={() => {
                        onClose();
                        onConfirm();
                        }}
                    >
                        Cancel
                    </Button>
                </div>
            </div>
        </div>
    </Dialog>
  );
}
