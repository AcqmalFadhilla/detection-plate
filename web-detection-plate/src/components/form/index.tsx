import React, {useState, ChangeEvent} from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "../ui/button"
import Panel from "@/components/panel/index"

const InputFile: React.FC = () => {
  const [videoSrc, setVideoSrc] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [isSubmited, setIsSubmited] = useState<boolean>(false);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const selectedFile = event.target.files?.[0]; // Ambil file pertama dari input
    if (selectedFile) {
      setFile(selectedFile) // simpan file untuk proses nantinya
      setIsSubmited(false) // reset status submit
    }
  };

  const handleSubmit = ():void => {
    if (file) {
      const videoURL = URL.createObjectURL(file)
      console.log(videoURL)
      setVideoSrc(videoURL)
      setIsSubmited(true)
    }
  } 

  return (
  <div className="flex flex-col w-full gap-5">
  { isSubmited && videoSrc &&
    <Panel videoSrc={videoSrc} label={["1", "2"]}/>
  }
  <div className="flex flex-col justify-center items-center gap-2">
    <div className="grid w-full rounded-lg max-w-sm items-center gap-1.5">
      <Label htmlFor="picture" className="text-sm font-medium">Image/Video</Label>
      <Input id="video-upload" type="file" className="file-input w-full" 
        aria-label="Upload an image or video" accept="video/*"
        onChange={handleFileChange}/>
      <Button onClick={handleSubmit}>Submit</Button>
    </div>
  </div>
  </div>
  )
}

export default InputFile
