import "./RichtextLayout.css";

type Props = {
  layoutHeight: number;
}

const RichtextLayout = ({layoutHeight}: Props) => {

  return (
    <>
      <div className="rich-text-layout" style={{ height: `${layoutHeight}px` }}>
        <div className="table-of-contents">
          
        </div>
        <div className="editor-content">

        </div>
      </div>
    </>
  )
}

export default RichtextLayout;