import "../../theme/theme.css";
import "./Toast.css";

type Props = {
    toastText: string
}

const Toast = ({toastText}: Props) => {
  return (
    <div className='toast'>{toastText}</div>
  )
}

export default Toast;