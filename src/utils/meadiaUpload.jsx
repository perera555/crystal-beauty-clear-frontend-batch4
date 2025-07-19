import { createClient } from "@supabase/supabase-js"

    const supabase = createClient("https://qtnwyoauoblbzygpzanz.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF0bnd5b2F1b2JsYnp5Z3B6YW56Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTIyODY3MDcsImV4cCI6MjA2Nzg2MjcwN30.3rdCXXn2mqbrFPX41Pd-YXTm9XAhsO0t7vopY5umD-U"

    );

    export default function mediaUpload(file){
    const promise = new Promise(
        (resolve,reject)=>{
            if(file == null){
                reject("No file selected")
            }
            const timeStamp = new Date().getTime()
            const newFileName = timeStamp + file.name
            supabase.storage.from("images").upload(newFileName,file,{
                cashControl:"3600",
                upsert:false,
            
            }).then(
                ()=>{
                    const  url = supabase.storage.from("images").getPublicUrl(newFileName).data.publicUrl
                    resolve(url)
                }
            ).catch(
                (error)=>{
                    reject("File Upload Failed")
                }
            )
            


        }
    )

 return promise
} 
