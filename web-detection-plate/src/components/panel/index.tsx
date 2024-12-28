import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
  } from "@/components/ui/resizable"

type PanelProps = {
    videoSrc: string | null;
    label: string[] | null;
};
const Panel: React.FC<PanelProps> = ({videoSrc, label}) => {
    return (
      <ResizablePanelGroup
        direction="horizontal"
        className="rounded-lg border h-full w-full">
        <ResizablePanel>
          <div className="flex h-full items-center justify-center p-3">
          {videoSrc ? (
            <video
              src={videoSrc}
              controls
              className="w-full max-w-md rounded-lg shadow-lg"
            >
              Your browser does not support the video tag.
            </video>
          ) : (
            <span className="text-gray-500">No video available</span>
          )}
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel>
          <div>
            {label && label.length > 0 ? 
              label.map((item, index) => (<ol key={index} className="flex flex-col mx-10 my-5 list-decimal">
                                            <li>{item}</li>
                                          </ol>)) 
              : <span className="flex h-full items-center justify-center p-6 text-gray-500">No labels available</span> }
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    )
  }
  
export default Panel