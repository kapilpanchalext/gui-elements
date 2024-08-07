import "../../theme/theme.css";
import "./Badge.css";

type Props = {
    badgeText: string
}

const Badge = ({badgeText}: Props) => {
  return (
    <div className='toast'>{badgeText}</div>
  )
}

export default Badge;