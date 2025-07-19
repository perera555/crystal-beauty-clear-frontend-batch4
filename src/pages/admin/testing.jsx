
import { useState } from "react"
import toast from "react-hot-toast"
import mediaUpload from "../../utils/meadiaUpload";

export default function Testing() {
    const [file, setFile] = useState(null);

    function handleUpload() {
        mediaUpload(file).then(
            (url) => {
            console.log(url)
            toast.success("File upload Successfully")
        }
        ).catch(
            (error) => {
            console.log(error)
            toast.error("File upload failed")
        }
    )
    
   
}
 
return (
    <div className="w-full h-screen flex flex-col justify-center items-center ">
        <input type="file" onChange={
            (e) => {
                setFile(e.target.files[0])
            }
        } />

        <button onClick={handleUpload} className="bg-gray-600 text-white p-2 rounded-lg ">Uploads</button>
    </div>

)

}
