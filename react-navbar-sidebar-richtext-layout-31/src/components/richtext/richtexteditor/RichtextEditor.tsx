import RichtextLayout from '../richtextlayout/RichtextLayout';

type Props = {
    layoutHeight: number;
}

const RichtextEditor = ({layoutHeight}: Props) => {
  return (
    <>
        <RichtextLayout layoutHeight={layoutHeight}/>
    </>
  )
}

export default RichtextEditor;