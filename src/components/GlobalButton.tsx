type GlobalButton = {
    additionalCss?: string
    title: string
    autoFocus?: boolean
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
    onKeyDown?: (e: React.KeyboardEvent<HTMLButtonElement>) => void
}

const GlobalButton = ({additionalCss, autoFocus, title, onClick, onKeyDown}: GlobalButton) => {
    let css = `relative mr-4 cursor-pointer select-none rounded-2xl 
          border-3 border-blue-600 px-5 py-2 font-bold text-blue-400 
          shadow-md shadow-blue-600 
          transition duration-300 ease-in-out 
          hover:bg-cyan-500 
          hover:shadow-cyan-600 
          hover:text-white 
          focus:outline-none 
          focus:ring-0 ${additionalCss}`;
    
    return <button autoFocus={autoFocus} onClick={onClick} onKeyDown={onKeyDown} className={css}>{title}</button>
}

export default GlobalButton;