const OpenAI=require("openai")
const fs=require("fs")
const openai= new OpenAI({
apiKey:"apikey"
});

const audioFun=async()=>{
    const transcription=await openai.audio.transcriptions.create({
        file:fs.createReadStream("uploads/recording.wav"),
       model:"whisper-1"
    })
    console.log(transcription.text)
}
audioFun();